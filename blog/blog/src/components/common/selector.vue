<template>
  <div class="selector">
    <div class="wordContainer">
      <span class="option selected">Latest</span><span class="split">|</span>
      <span class="option">Popular</span><span class="split">|</span>
      <span class="option">Featured</span>
    </div>
    <div class="imgContainer">
      <img src="../../assets/menu.svg">
      <img src="../../assets/square.svg">
    </div>  
  </div>
</template>
<script>
export default {
  name: 'selector'
}
</script>
<style lang="less" scoped>
.selector{
  width: 75%;
  margin: 30px auto;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  line-height: 25px;
  .wordContainer{
    .selected{
      color: #fa8b5f;
      text-decoration: line-through;
    }
    .split{
      margin: 0 20px;
    }
    .option{
      cursor: pointer;
    }
    .option:hover{
      color: #fa8b5f;
    }
  }
  .imgContainer{
   img{
     width: 25px;
     vertical-align: middle;
   }
  }
}
</style>

