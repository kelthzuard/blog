<template>
    <div>
        <div class="part">
            <span>文章名：</span> 
            <input type="text" v-model="articleInfo.name">
        </div>
        <div class="part">
            <span>头图：</span> 
            <input ref="img" type="file" accept=".png, .jpg, jpeg">
        </div>
        <div class="part" v-for="(item, index) in articleInfo.tag">
            <span>标签：</span> 
            <input type="text" v-model="articleInfo.tag[index]">
        </div>
        <div class="part">
            <span @click="addTag">添加</span> 
            <span @click="deleteTag">删除</span>
        </div>
        <mavon-editor @change="saveRender" @imgAdd="imgAdd" ref="mavon"></mavon-editor>
        <div class="Button" @click="submit">提交</div>
    </div>
</template>
<script>    
export default {
    name: 'editpage',
    data () {
        return {
            articleInfo: {
                name: '',
                img: '',
                content: '',
                tag: ['']
            }
        }
    },
    methods: {
        addTag () {
            this.articleInfo.tag.push('')
        },
        deleteTag () {
            this.articleInfo.tag.pop()
        },
        saveRender (value, render) {
            this.articleInfo.content = render
            console.log(render)
        },
        imgAdd (fileName, file) {
            this.getToken(file, fileName, this.$refs.mavon.$img2Url)
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
            if (this.articleInfo.name == '') {
                alert('文章名不能为空')
                return
            }
            if (this.articleInfo.content == '') {
                alert('文章内容不能为空')
                return
            }
            if (this.articleInfo.tag.length == 0) {
                alert('标签不能为空')
                return 
            }
            this.articleInfo.tag = this.articleInfo.tag.join(';')
            if (this.$refs.img.files.length > 0) {
                const file = this.$refs.img.files[0]
                this.getToken(file, 'headImg', (fileName, url) => {
                    console.log(this.articleInfo)
                    this.articleInfo.img = url
                    this.startUpload()
                })
            }

        },
        startUpload () {
            let self = this
            this.$axios.post('/writeArticle', self.articleInfo)
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