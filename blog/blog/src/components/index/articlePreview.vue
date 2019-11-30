<template>
  <div class="articlePreview">
    <div class="main" @mouseover="showShadow" @mouseout="showShadow" :style="'box-shadow:rgba(0,0,0,'+((shadow)?'0.3':'0.1')+') 0 0 10px'">
      <div class="title">
        <div class="leftLine"></div>
        <div class="titleBody">
          <p class="header" :style="'color:'+((shadow)?'#fa8b5f':'#000')">Puppteer+Jest自动化测试</p>
          <p class="desc">
            <span style="color:#fa8b5f">程序设计</span>●
            <span>自动化测试</span>
          </p>
        </div>
      </div>
      <div class="body" style="display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;">
        对于浏览器行为的方法，列入等待并点击，等待并跳转，等待并获取html元素内容等而言。由于浏览器行为为真实模拟用户在浏览器中的行为，所以难以避免网络延迟带来的影响，需要在每个方法前手动调用进行延迟操作。
        但对于很多延迟较高的网页来说难以精准的控制延迟，每次操作方法前的延迟难以弥补浏览器反应迟缓造成的报错。这样的报错是属于意料之外的操作，应该尽量进行避免。考虑采用对于puppteer整体使用slowdown延迟操作，牺牲时间来弥补自动化测试的正确性。
        因为采用了非常多的延时操作来增加自动化测试的正确性和可靠性，所以会大大牺牲时间成本，但作为本来应用为单元测试框架的jest框架，对于每个单元测试用例有严格的时间要求，所以要尽量把单元测试用例的时间设置为较长的时间，保证测试的正常进行。减少报错。
      </div>
      <div class="date">
        2019-5-21 04:32
      </div>
      <div class="topLine"></div>
    </div>
    <div class="selector" @mouseover="moveButton" @mouseout="moveButton">
      <div class="leftButton" :style="'right:'+((buttonPosition)?'-20px':'0')"></div>
    </div>
    <div class="intro" @mouseover="moveBar" @mouseout="moveBar">
      <p class='title'>最新原创文章</p>
      <p>Newest origin article</p>
      <div class="viewMore">
        <p>VIEW MORE</p>
        <div class="bar" :style="'marginRight:'+((barPosition)?'30%':'0')+';width:'+((barPosition)?'10%':'30%')"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'articlePreview',
  data () {
    return {
      barPosition: false,
      buttonPosition: false,
      shadow: false
    }
  },
  methods: {
    moveBar () {
      this.barPosition = !this.barPosition
    },
    moveButton () {
      this.buttonPosition = !this.buttonPosition
    },
    showShadow () {
      this.shadow = !this.shadow
    }
  }
}
</script>
<style lang="less" scoped>
.articlePreview{
  padding: 70px 10%;
  display: flex;
}
.selector{
  width: 10%;
  height: 250px;
  position: relative;
  .leftButton{
    width: 0; 
    height: 0;
    border-width: 25px;
    border-style: solid;
    border-color: transparent  transparent transparent #fa8b5f;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .leftButton::after{
    content: ' ';
    width: 0; 
    height: 0;
    border-width: 30px;
    border-style: solid;
    border-color: transparent  transparent transparent #fff;
    position: absolute;
    top: 50%;
    left: -34px;
    transform: translateY(-50%);
  }
}
.intro{
  flex: 1;
  height: 250px;
  font-size: 18px;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
  margin-right: 15%;
  .title{
    margin: 10px 0;
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
      float: right;
    }
  }
}
.main{
  width: 50%;
  padding: 20px;
  height: 250px;
  transition: all 0.5s ease;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.main .title{
  display: flex;
  .leftLine{
    width: 1px;
    height: 70px;
    background: #fa8b5f;
  }
  .titleBody{
    margin-left: 30px;
    text-align: left;
    .header{
      font-size: 20px;
      font-weight: 600;
      margin: 10px 0;
      transition: color 0.3s ease;
    }
    .desc{
      font-size: 12px;
    }
  }
}
.main .body{
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-top: 20px;
  padding: 0 10px;
  text-align: left;
}
.main .date{
  margin-top: 20px;
  text-align: right;
  font-size: 12px;
  color: #999;
}
.main .topLine{
  height: 1px;
  width: 10px;
  background: #fa8b5f;
  position: absolute;
  top: 20px;
  left: 20px;
}

</style>


