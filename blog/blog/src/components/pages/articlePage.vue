<template>
    <div class="page">
        <router :type="'article'"></router>
        <div class="header">
            <img :src="articleInfo.img">
            <div class="title">
                <div class="tag">
                    <span v-for="(item, index) in articleInfo.tag" :key="index">{{item}}</span>
                </div>
                <div class="main">{{articleInfo.name}}</div>
                <div class="views">
                    <img src="../../assets/eye.svg">
                    <span>{{articleInfo.watch}}</span>
                    <img src="../../assets/heart.svg">
                    <span>{{articleInfo.like}}</span>
                </div>   
            </div>
        </div>
        <div class="mainContainer" v-html="articleInfo.content"></div>
        <div class="date">
            <span>{{articleInfo.date}}</span>
        </div>
    </div>
</template>
<script>
import router from '../common/router'
export default {
    name: 'articlePage',
    components: {
        router
    },
    data () {
        return {
            articleInfo: {}
        }
    },
    mounted() {
        const id = this.$route.query.id
        this.getData(id)
    },
    methods: {
        getData (id) {
            this.$axios.get('/getArticle?id=' + id)
            .then ( (res) => {
                this.articleInfo = res.data.result.data[0]
                this.articleInfo.tag = this.articleInfo.tag.split(';')
            })
            .catch ( (err) => {
                console.log(err)
            })
        }
    },
}
</script>
<style lang="less" scoped>
.page{
    padding-bottom: 200px;
}
.header{
    width: 70%;
    display: flex;
    margin: 100px auto;
    img{
        width: 40%; 
    }
    .title{
        margin-left: 10%;
        .tag{
            text-align: right;
            font-size: 18px;
            color: #fa8b5f;
            font-weight: 600;
            margin-bottom: 30px;
            span{
                margin: 0 10px;
            }
        }
        .main{
            font-size: 40px;
            font-weight: 600;
            letter-spacing: 5px;
            text-align: left;
            line-height: 50px;
        }
        .views{
            font-size: 13px;
            font-weight: 600;
            line-height: 20px;
            display: flex;
            letter-spacing: 1px;
            margin: 20px 0;
            span{
                margin: 0 10px;
            }
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
}

.mainContainer{
    width: 65%;
    margin: 0 auto;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 30px;
    text-align: left;
}
.date{
    width: 70%;
    margin: 50px auto;
    span{
        float: right;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
    }
}
</style>