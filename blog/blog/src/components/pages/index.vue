<template>
<div class="mainContainer">
  <router :type="'home'"></router>
  <div class="backPic">
    <div class="word">
      WELCOME<br>BRO
      <p class="desc">please enjoy yourself and <br>contact me <br>if you find any thing wrong in this website</p>
    </div>
  </div>
  <introduce></introduce>
  <photo-preview></photo-preview>
  <article-preview></article-preview>
  <contact-me></contact-me>
  <end-part></end-part>
  <div class="copyRight">
    <div class="leftPart">
      all rights reversed by kelthzuard Website registration information has been included in the institution Prohibit all misappropriation Offenders are held liable
    </div>
    <div class="rightPart">
      <span>all numbers of visitors</span>
      <span class="bold">11,230,223</span>
    </div>
  </div>
</div>
</template>
<script>
import router from '../common/router'
import introduce from '../index/introduce'
import articlePreview from '../index/articlePreview'
import photoPreview from '../index/photoPreview'
import contactMe from '../index/contactMe'
import endPart from '../index/endPart'
export default {
  name: 'index',
  components: {
    router,
    articlePreview,
    photoPreview,
    introduce,
    contactMe,
    endPart
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.topHeaderIcon{
  width: 100%;
  height: 45px;
  border-bottom: 2px solid #f0f0f0;
  img{
    height: 41px;
    margin: 2px auto;
  }
}
.backPic{
  width: 70%;
  height: 400px;
  margin: 30px auto;
  position: relative;
  background-image: url(../../assets/background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 45px;
  font-weight: 600;
  color: #fff;
  text-align: left;
  letter-spacing: 5px;
  .word{
    position: absolute;
    top: 60px;
    left: 50px;
    .desc{
      margin-top: 30px;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
.splitLine{
  width: 80%;
  height: 1px;
  background: #999;
  margin: 20px auto;
}
.copyRight{
  width: 80%;
  margin: 0 auto 30px auto;
  color: #999;
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  .leftPart{
    width: 60%;
  }
  .rightPart .bold{
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
}
</style>


