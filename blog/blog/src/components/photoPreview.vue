<template>
  <div class="photoPreview">
    <div class="intro" @mouseover="moveBar" @mouseout="moveBar">
      <p>设计画廊</p>
      <p>Graphic gallery</p>
      <div class="viewMore">
        <p>VIEW MORE</p>
        <div class="bar" :style="'marginLeft:'+((barPosition)?'30%':'0')+';width:'+((barPosition)?'10%':'30%')"></div>
      </div>
    </div>
    <div class="middle">
      <div class="imgContainer"></div>
      <div class="wordContainer">
        <p class="title">图simple社团2018年招新书签设计 抽象隐喻风</p>
        <p class="desc">As people change code to achieve short­term goals, often without a full comprehension of the architecture, the code loses its structure. It becomes harder for me to see the design by reading the code. Loss of the structure of code has a cumulative effect.</p>
      <p class="bigDate">22 / MAY.<br>2019</p>
      </div>
    </div>
    <div class="short">
      <div class="imgContainer" style="background-image: url(https://ali.baicizhan.com/readin/images/book_wiki/img_1558519210_956027211)"></div>
      <p class="title">反战动保系列海报之一（血债血偿)thats a deal</p>
      <p class="smallDate">21 / MAY / 2019</p>
    </div>
    <div class="short">
      <div class="imgContainer" style="background-image: url(https://ali.baicizhan.com/readin/images/book_wiki/img_1558519648_776009008)"></div>
      <p class="title">反战动保系列海报之二（血债血偿)thats a deal</p>
      <p class="smallDate">21 / MAY / 2019</p>
    </div>
    <div class="big">
      <div class="imgContainer"></div>
      <div class="wordContainer">
        <p class="title">节能减排大赛海报 ins风格 极简风格 the butterfly reaction</p>
        <p class="desc">As people change code to achieve short­term goals, often without a full comprehension of the architecture, the code loses its structure. It becomes harder for me to see the design by reading the code. Loss of the structure of code has a cumulative effect.</p>
        <p class="bigDate">06 / JUNE.<br>2019</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'photoPreview',
  data () {
    return {
      barPosition: false
    }
  },
  methods: {
    moveBar () {
      this.barPosition = !this.barPosition
    }
  }
}
</script>
<style lang="less" scoped>
.photoPreview{
  padding: 50px 10%;
  display: flex;
  flex-wrap: wrap;
}
.middle{
  width: 46%;
  margin: 25px 2%;
  height: 21rem;
  box-sizing: border-box;
  display: flex;
  .imgContainer{
    width: 40%;
    height: 100%;
    margin-right: 10%;
    background: url(../assets/middle.png);
    background-size: cover;
    background-position: center;
  }
  .wordContainer{
    text-align: left;
    width: 50%;
    position: relative;
    .title{
      font-size: 16px;
      font-weight: 600;
    }
    .desc{
      margin-top: 10%;
      font-size: 12px;
    }
    .bigDate{
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
.intro{
  width: 23%;
  height: 21rem;
  margin: 25px 1%;
  font-size: 22px;
  text-align: left;
  font-weight: 600;
  cursor: pointer;
  p{
    margin: 20px 0;
  }
  .viewMore{
    margin-top: 30px;
    font-size: 12px;
    color: #fa8b5f;
    font-weight: 600;
    .bar{
      width: 30%;
      height: 3px;
      margin-top: 10px;
      background: #fa8b5f;
      transition: all 0.3s ease;
    }
  }
}
.short{
  width: 23%;
  height: 21rem;
  margin: 25px 1%;
  text-align: left;
  .imgContainer{
    width: 100%;
    height: 40%;
    background: url(../assets/short.jpg);
    background-size: cover;
    background-position: center;
  }
  .title{
    font-size: 16px;
    font-weight: 600;
    margin-top: 10%;
  }
  .smallDate{
    font-size: 12px;
    color: #999;
    margin: 10px 0;
  }
}
.big{
  width: 71%;
  margin: 25px 2%;
  height: 21rem;
  box-sizing: border-box;
  display: flex;
  .imgContainer{
    width: 60%;
    height: 100%;
    margin-right: 10%;
    background: url(https://ali.baicizhan.com/readin/images/book_wiki/img_1558520105_109136908);
    background-size: cover;
    background-position: center;
  }
  .wordContainer{
    text-align: left;
    width: 30%;
    position: relative;
    .title{
      font-size: 16px;
      font-weight: 600;
    }
    .desc{
      margin-top: 10%;
      font-size: 12px;
    }
    .bigDate{
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>



