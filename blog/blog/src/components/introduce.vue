<template>
  <div class="introduce">
    <div class="leftSide" @mouseover="moveBar" @mouseout="moveBar">
      <p class="title">Head first my blog<br>hope you enjoy</p>
      <p class="detail">As people change code to achieve short­term goals, often without a full comprehension of the architecture, the code loses its structure. It becomes harder for me to see the design by reading the code. Loss of the structure of code has a cumulative effect. </p>
      <div class="viewMore">
        <p>VIEW ARTICLE</p>
        <div class="bar" :style="'marginLeft:'+((barPosition)?'30%':'0')+';width:'+((barPosition)?'10%':'30%')"></div>
      </div>
    </div>
    <div class="imgPart">
      <div class="imgContainer">   
        <img src="../assets/engineerImg.jpg">   
      </div>
      <p class="title">egineering article</p>
      <p class="detail">specific techqnue including fornt end, back end and actifiction intellgience</p>
    </div>
    <div class="imgPart">
      <div class="imgContainer">   
        <img src="../assets/dailyLife.jpg">   
      </div>
      <p class="title">dailyTrace share</p>
      <p class="detail">food, traveling, every single process in daily life.having fun sharing it in photograph</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'introduce',
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
.introduce{
  width: 100%;
  height: 330px;
  margin: 0 auto;
  padding: 50px 10%;
  box-sizing: border-box;
  display: flex;
  .leftSide{
    flex: 1;
    text-align: left;
    cursor: pointer;
    .title{
      font-size: 20px;
      font-weight: 600;
      line-height: 150%;
      margin-bottom: 30px;
    }
    .detail{
      font-size: 12px;
      margin-top: 10px;
    }
    .viewMore{
      margin-top: 20px;
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
  .imgPart{
    width: 25%;
    height: 100%;
    text-align: left;
    padding: 1% 2%;
    .imgContainer{
      margin: 0 auto;
      width: 100%;
      img{
        width: 100%;
      }
    }
    .title{
      margin: 20px 0;
      font-weight: 600;
    }
    .detail{
      font-size: 12px;
    }
  }
}
</style>


