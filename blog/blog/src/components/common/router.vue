<template>
  <div class="container">
    <div class="title">KELTHZUARD <br>BLOG</div>
    <div :class="'option' + ((type === 'home')?' selected':'')" @click="redirect('/')">Home</div>
    <div :class="'option' + ((type === 'article')?' selected':'')" @click="redirect('/article')" class="option">article</div>
    <div :class="'option' + ((type === 'gallery')?' selected':'')" @click="redirect('/gallery')" class="option">gallery</div>
    <div :class="'option' + ((type === 'about')?' selected':'')" class="option">about</div>
    <div class="option right">
      <img src="../../assets/search.svg">
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
  },
  methods: {
    redirect (path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 10%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
}
.container .title{
  line-height: 100%;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}
.container .option{
  color: #666;
  font-size: 16px;
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


