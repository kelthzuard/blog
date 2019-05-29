<template>
  <div class="selector">
    <span class="option selected">Latest</span><span class="split">|</span>
    <span class="option">Popular</span><span class="split">|</span>
    <span class="option">Featured</span>
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
  font-size: 12px;
  font-weight: 600;
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
</style>

