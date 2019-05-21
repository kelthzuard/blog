<template>
  <div class="container">
    <div :class="'option' + ((type === 'home')?' selected':'')">Home</div>
    <div class="option">article</div>
    <div class="option">photograph</div>
    <div class="option">aboutMe</div>
    <div class="option right">
      <img src="../assets/search.svg">
    </div>
  </div>
</template>
<script>
export default {
  name: 'router',
  props: [
    'type'
  ],
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.container{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10%;
  display: flex;
  box-sizing: border-box;
}
.container .option{
  color: #999;
  font-size: 14px;
  cursor: pointer;
  margin: 0 30px;
  transition: color 0.3s ease;

}
.container .option:hover{
  color: #fa8b5f;
}
.container .selected{
  text-decoration: line-through;
  color: #fa8b5f;
}
.container .right{
 margin-left: 30%;
 img{
   width: 20px;
   vertical-align: middle;
 }
}
</style>


