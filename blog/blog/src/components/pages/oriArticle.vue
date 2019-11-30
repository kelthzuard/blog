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
      <div class="item" @click="goToArticle">
        <div class="imgContainer">
          <p class="date"># 2019 / 04 / 25</p>
          <div class="img"></div>
        </div>
        <div class="desc">
          <p class="title">Puppteer + jest 前端自动化测试方案探索和实践方案</p>
          <div class="description">
            <div class="tag">
              <span>frontEnd</span>
              <span>AutoTest</span>
            </div>
            <div class="views">
              <img src="../../assets/eye.svg">
              <span>1,203</span>
              <img src="../../assets/heart.svg">
              <span>332</span>
            </div>
          </div>
          <div class="contain" style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
          对于浏览器行为的方法，列入等待并点击，等待并跳转，等待并获取html元素内容等而言。由于浏览器行为为真实模拟用户在浏览器中的行为，所以难以避免网络延迟带来的影响，需要在每个方法前手动调用进行延迟操作。
            但对于很多延迟较高的网页来说难以精准的控制延迟，每次操作方法前的延迟难以弥补浏览器反应迟缓造成的报错。这样的报错是属于意料之外的操作，应该尽量进行避免。考虑采用对于puppteer整体使用slowdown延迟操作，牺牲时间来弥补自动化测试的正确性。
            因为采用了非常多的延时操作来增加自动化测试的正确性和可靠性，所以会大大牺牲时间成本，但作为本来应用为单元测试框架的jest框架，对于每个单元测试用例有严格的时间要求，所以要尽量把单元测试用例的时间设置为较长的时间，保证测试的正常进行。减少报错。
          </div>
        </div>
      </div>
      <div class="item">
        <div class="imgContainer">
          <p class="date"># 2019 / 04 / 25</p>
          <div class="img"></div>
        </div>
        <div class="desc">
          <p class="title">Puppteer + jest 前端自动化测试方案探索和实践方案</p>
          <div class="description">
            <div class="tag">
              <span>frontEnd</span>
              <span>AutoTest</span>
            </div>
            <div class="views">
              <img src="../../assets/eye.svg">
              <span>1,203</span>
              <img src="../../assets/heart.svg">
              <span>332</span>
            </div>
          </div>
          <div class="contain" style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
          对于浏览器行为的方法，列入等待并点击，等待并跳转，等待并获取html元素内容等而言。由于浏览器行为为真实模拟用户在浏览器中的行为，所以难以避免网络延迟带来的影响，需要在每个方法前手动调用进行延迟操作。
            但对于很多延迟较高的网页来说难以精准的控制延迟，每次操作方法前的延迟难以弥补浏览器反应迟缓造成的报错。这样的报错是属于意料之外的操作，应该尽量进行避免。考虑采用对于puppteer整体使用slowdown延迟操作，牺牲时间来弥补自动化测试的正确性。
            因为采用了非常多的延时操作来增加自动化测试的正确性和可靠性，所以会大大牺牲时间成本，但作为本来应用为单元测试框架的jest框架，对于每个单元测试用例有严格的时间要求，所以要尽量把单元测试用例的时间设置为较长的时间，保证测试的正常进行。减少报错。
          </div>
        </div>
      </div>
      <div class="item">
        <div class="imgContainer">
          <p class="date"># 2019 / 04 / 25</p>
          <div class="img"></div>
        </div>
        <div class="desc">
          <p class="title">Puppteer + jest 前端自动化测试方案探索和实践方案</p>
          <div class="description">
            <div class="tag">
              <span>frontEnd</span>
              <span>AutoTest</span>
            </div>
            <div class="views">
              <img src="../../assets/eye.svg">
              <span>1,203</span>
              <img src="../../assets/heart.svg">
              <span>332</span>
            </div>
          </div>
          <div class="contain" style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
          对于浏览器行为的方法，列入等待并点击，等待并跳转，等待并获取html元素内容等而言。由于浏览器行为为真实模拟用户在浏览器中的行为，所以难以避免网络延迟带来的影响，需要在每个方法前手动调用进行延迟操作。
            但对于很多延迟较高的网页来说难以精准的控制延迟，每次操作方法前的延迟难以弥补浏览器反应迟缓造成的报错。这样的报错是属于意料之外的操作，应该尽量进行避免。考虑采用对于puppteer整体使用slowdown延迟操作，牺牲时间来弥补自动化测试的正确性。
            因为采用了非常多的延时操作来增加自动化测试的正确性和可靠性，所以会大大牺牲时间成本，但作为本来应用为单元测试框架的jest框架，对于每个单元测试用例有严格的时间要求，所以要尽量把单元测试用例的时间设置为较长的时间，保证测试的正常进行。减少报错。
          </div>
        </div>
      </div>
      <div class="item">
        <div class="imgContainer">
          <p class="date"># 2019 / 04 / 25</p>
          <div class="img"></div>
        </div>
        <div class="desc">
          <p class="title">Puppteer + jest 前端自动化测试方案探索和实践方案</p>
          <div class="description">
            <div class="tag">
              <span>frontEnd</span>
              <span>AutoTest</span>
            </div>
            <div class="views">
              <img src="../../assets/eye.svg">
              <span>1,203</span>
              <img src="../../assets/heart.svg">
              <span>332</span>
            </div>
          </div>
          <div class="contain" style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
          对于浏览器行为的方法，列入等待并点击，等待并跳转，等待并获取html元素内容等而言。由于浏览器行为为真实模拟用户在浏览器中的行为，所以难以避免网络延迟带来的影响，需要在每个方法前手动调用进行延迟操作。
            但对于很多延迟较高的网页来说难以精准的控制延迟，每次操作方法前的延迟难以弥补浏览器反应迟缓造成的报错。这样的报错是属于意料之外的操作，应该尽量进行避免。考虑采用对于puppteer整体使用slowdown延迟操作，牺牲时间来弥补自动化测试的正确性。
            因为采用了非常多的延时操作来增加自动化测试的正确性和可靠性，所以会大大牺牲时间成本，但作为本来应用为单元测试框架的jest框架，对于每个单元测试用例有严格的时间要求，所以要尽量把单元测试用例的时间设置为较长的时间，保证测试的正常进行。减少报错。
          </div>
        </div>
      </div>
    </div>
    <page ref="page"></page>
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

    }
  },
  mounted () {
    this.$refs.page.setTotal(20)
  },
  methods: {
    goToArticle () {
      this.$router.push({
        path: 'articlePage'
      })
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


