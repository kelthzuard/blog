<template>
    <div>
        <div class="part">
            <span>图片名：</span> 
            <input type="text" v-model="galleryInfo.name">
        </div>
        <div class="part">
            <span>头图：</span> 
            <input ref="img" type="file" accept=".png, .jpg, jpeg">
        </div>
        <div class="part" v-for="(item, index) in galleryInfo.tag">
            <span>标签：</span> 
            <input type="text" v-model="galleryInfo.tag[index]">
        </div>
        <div class="part">
            <span @click="addTag">添加</span> 
            <span @click="deleteTag">删除</span>
        </div>
        <div class="part">
            <span>描述: </span>
            <textarea type="text" v-model="galleryInfo.desc"></textarea>
        </div>
        <div class="Button" @click="submit">提交</div>
    </div>
</template>
<script>    
export default {
    name: 'editGallery',
    data () {
        return {
            galleryInfo: {
                name: '',
                img: '',
                desc: '',
                tag: ['']
            }
        }
    },
    methods: {
        addTag () {
            this.galleryInfo.tag.push('')
        },
        deleteTag () {
            this.galleryInfo.tag.pop()
        },
        getToken (file, fileName, callback) {
            this.$axios.post('/getKey', {})
            .then( (res) => {
                this.uploadImg(file, res.data.uploadToken,fileName,callback)
            })
            .catch( (err) => {
                alert('error')
            })
        },
        uploadImg (file, token, fileName, callback) {
            let formData = new FormData()
            formData.append('token', token)
            formData.append('file', file)
            this.$axios.post('http://upload.qiniup.com', formData)
            .then( (res) => {
                const url = 'http://cdn.firelocater.top/' + res.data.key
                callback(fileName, url)
            })
            .catch( (err) => {
                console.log(err)
            })
        },
        submit () {
            if (this.galleryInfo.name == '') {
                alert('图片名不能为空')
                return
            }
            if (this.galleryInfo.desc == '') {
                alert('图片描述内容不能为空')
                return
            }
            if (this.galleryInfo.tag.length == 0) {
                alert('标签不能为空')
                return 
            }
            this.galleryInfo.tag = this.galleryInfo.tag.join(';')
            if (this.$refs.img.files.length > 0) {
                const file = this.$refs.img.files[0]
                this.getToken(file, 'headImg', (fileName, url) => {
                    this.galleryInfo.img = url
                    this.startUpload()
                })
            }

        },
        startUpload () {
            let self = this
            this.$axios.post('/writeGallery', self.galleryInfo)
            .then( (res) => {
                alert('success')
            })
            .catch( (err) => {
                console.log(err)
            })
        }
    },
}
</script>
<style lang="less">
.part{
    padding: 20px 0 20px 50px;
    textarea{
        width: 400px;
        height: 100px;
    }
}
.Button{
    width: 150px;
    height: 80px;
    text-align: center;
    background: #f5f5f5;
    line-height: 80px;
    font-size: 25px;
    border-radius: 10px;
    margin: 50px;
    cursor: pointer;
}
</style>