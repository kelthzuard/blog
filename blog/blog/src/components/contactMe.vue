<template>
<div class="contactMeBack">
  <div class="contactMe">
    <div class="wordContainer">
      <div class="desc">
        <p>VIEW MORE</p>
        <div class="bar"></div>
      </div>
      <div class="title">
        <p>CONTACT</p>
        <p style="margin-right: -10px;">US</p>
      </div>
    </div>
    <div class="imgContainer">
      <img class="thumb" src="../assets/thumb.png">
    </div>
    <div class="descContainer">
      <p>email / a522516259@163.com</p>
      <p class="middle">phone / 18380266573</p>
      <p>address / uestc, chenghua, chengdu</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'contactMe'
}
</script>
<style lang="less" scoped>
.contactMeBack{
  width: 100%;
  background: #f5f5f5;
}
.contactMe{
  width: 80%;
  margin: 60px auto;
  display: flex;
}
.wordContainer{
  width: 25%;
  word-break: break-all;
  position: relative;
  flex: 1;
  .desc{
    position: absolute;
    top: 50px;
    right: 70px;
    font-size: 16px;
    text-align: left;
    color: #fa8b5f;
    font-weight: 600;
    .bar{
      width: 100%;
      height: 3px;
      margin-top: 20px;
      margin-left: 20px;
      background: #fa8b5f;
      transition: all 0.3s ease;
    }
  }
  .title{
    position: absolute;
    text-align: right;
    right: 0;
    bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 3px;
  }
}
.imgContainer{
  height: 200px;
  .thumb{
    height: 100%;
  }
}
.descContainer{
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px 0;
  box-sizing: border-box;
  p{
    flex: 1;
  }
  .middle{
    margin-left: 30px;
  }
}

</style>

