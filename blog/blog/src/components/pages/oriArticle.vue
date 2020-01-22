<template>
  <div class="mainContainer">
    <router :type="'article'"></router>
    <div class="header">
      <div class="cover">
        <p class="sub">Includin front end / back end / <br>learining experiences etc /</p>
        <div class="main">
          <p class="chinese">原创文章</p>
          <p>ORIGINAL</p>
          <p>ARTICLE</p>
        </div>
      </div>
    </div>
    <selector></selector>
    <div class="body">
      <div class="item" @click="goToArticle(item)" v-for="(item, index) in articleData" :key="index">
        <div class="imgContainer">
          <p class="date"># {{item.date}}</p>
          <div class="img" :style="'background-image: url(' + item.img + ')'"></div>
        </div>
        <div class="desc">
          <p class="title">{{item.name}}</p>
          <div class="description">
            <div class="tag">
              <span v-for="(items, index) in item.tag" :key="index">{{items}}</span>
            </div>
            <div class="views">
              <img src="../../assets/eye.svg">
              <span>{{item.watch}}</span>
              <img src="../../assets/heart.svg">
              <span>{{item.like}}</span>
            </div>
          </div>
          <div class="contain" v-html="item.content" style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
          </div>
        </div>
      </div>
    </div>
    <page ref="page" @pageChange="pageChange"></page>
  </div>
</template>
<script>
import router from '../common/router'
import selector from '../common/selector'
import page from '../common/page'
export default {
  name: 'oriArticle',
  components: {
    router,
    selector,
    page
  },
  data () {
    return {
      articleData: []
    }
  },
  mounted () {
    this.getData(0)
  },
  methods: {
    getData (page) {
      this.$axios.get('/getArticleList?page=' + page + '&size=6')
      .then( (res) => {
        const data = res.data.data
        const reg = /<img.*?(?:>|\/>)/gi // 正则匹配图片并去掉。防止简介里面显示图片
        data.forEach( (value) => {
          value.tag = value.tag.split(';')
          value.content = value.content.replace(reg, '')
        })  
        this.articleData = data
        this.$refs.page.setTotal(res.data.total)
      })
      .catch( (err) => {
        console.log(err)
      })
    },
    goToArticle (articleInfo) {
      const articleId = articleInfo.id
      this.$router.push({
        path: 'articlePage',
        query: {
          id: articleId
        }
      })
    },
    pageChange (page) {
      this.getData (page)
    }
  },
}
</script>
<style lang="less" scoped>
.mainContainer{
  width: 100%;
}
.header{
  width: 70%;
  height: 400px;
  margin: 30px 15%;
  position: relative;
  background-image: url(../../assets/article.jpg);
  background-size: cover;
  background-position: left;
  color: #fff;
  text-align: left;
  .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    .sub{
      position: absolute;
      bottom: 10%;
      right: 10%;
      text-align: left;
    }
    .main{
      font-size: 45px;
      font-weight: 600;
      position: absolute;
      right: 10%;
      top: 40%;
      transform: translateY(-50%);
      letter-spacing: 9px;
      .chinese{
        margin-left: -25px;
        font-size: 30px;
      }
    }
  }
}
.body{
  width: 80%;
  margin: 0 auto;
  padding: -50px 20px 20px 20px;
}
.item{
  width: 100%;
  height: 250px;
  display: flex;
  box-sizing: border-box;
  margin: 50px 0;
}
.imgContainer{
  width: 30%;
  height: 100%;
  text-align: left;
  .date{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .img{
    width: 100%;
    height: 12rem;
    background-image: url(../../assets/background.jpg);
    background-size: cover;
    background-position: center;
    
  }
}
.desc{
  flex: 1;
  margin-left: 10%;
  text-align: left;
  .title{
    width: 50%;
    font-size: 20px;
    font-weight: 600;
  }
  .description{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .tag{
      font-size: 13px;
      font-weight: 600;
      color: #fa8b5f;
      span{
        margin: 0 10px;
      }
    }
    .views{
      font-size: 13px;
      font-weight: 600;
      line-height: 20px;
      display: flex;
      span{
        margin: 0 10px;
      }
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .contain{
    font-size: 13px;
    margin: 50px 0 0 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 200%;
  }
}
</style>


