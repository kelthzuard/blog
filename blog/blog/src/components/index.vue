<template>
<div class="mainContainer">
  <div class="topHeaderIcon">
    <img src="../assets/word.png">
  </div>
  <router :type="'home'"></router>
  <div class="backPic">
  </div>
  <introduce></introduce>
  <article-preview></article-preview>
  <photo-preview></photo-preview>
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
import router from './router'
import introduce from './introduce'
import articlePreview from './articlePreview'
import photoPreview from './photoPreview'
import contactMe from './contactMe'
import endPart from './endPart'
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
  width: 100%;
  height: 250px;
  background-image: url(../assets/background.jpg);
  background-size: cover;
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


