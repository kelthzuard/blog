<template>
  <div class="endPart">
    <div class="imgPart">
      <img src="../assets/icon.jpeg">
    </div>
    <div class="introPart">
      <p class="title">KELTHZUARD's Blog</p>
      <p class="desc">established at the beginning to teach pipi lu front end and back end techqinue.Now im building it to write down my learning experience and my artifical work.</p>
    </div>
    <div class="Navigation">
      <p class="title">Navigation</p>
      <p class="item">HOME</p>
      <p class="item">ARTICLE</p>
      <p class="item">GALLERY</p>
      <p class="item">ABOUT</p>
    </div>
    <div class="Navigation ContactInfo">
      <p class="title">Contact Infomation</p>
      <p class="item">tel&nbsp;&nbsp;&nbsp;&nbsp;18380266573</p>
      <p class="item">email&nbsp;&nbsp;&nbsp;&nbsp;a522516259@163.com</p>
      <p class="item">address&nbsp;&nbsp;&nbsp;&nbsp;UESTC/chengdu</p>
    </div>
    <div class="Navigation  follow">
      <div class="title">Follow Us</div>
      <p class="item">Twitter</p>
      <p class="item">BiliBili</p>
      <p class="item">CSDN blog</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'endPart'
}
</script>
<style lang="less" scoped>
.endPart{
  width: 80%;
  margin: 20px auto;
  height: 200px;
  display: flex;
  box-sizing: border-box;
}
.imgPart{
  width: 10%;
  img{
    width: 100%;
  }
}
.introPart{
  width: 30%;
  margin-left: 5%;
  text-align: left;
  .title{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .desc{
    font-size: 12px;
  }
}
.Navigation{
  width: 10%;
  margin: 0 5%;
  text-align: left;
  .title{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .item{
    font-size: 12px;
    margin-bottom: 20px;
  }
}
.ContactInfo{
  width: 20%;
  margin: 0;
}
.follow{
  flex: 1;
  margin-left: 2.5%;
}
</style>


