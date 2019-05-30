<template>
  <div class="page">
    <img class="leftArrow" src="../../assets/arrow.svg" @click="changePage(selected - 1)">
    <div class="numbers" v-for="(item, index) in pages" :key="index">
      <span :class="(item === selected)?'selected':''" @click="changePage(item)">{{Math.floor(item/10) + String(item - Math.floor(item/10)*10)}}</span>
    </div>
    <img src="../../assets/arrow.svg" @click="changePage(selected + 1)">
  </div>
</template>
<script>
export default {
  name: 'page',
  data () {
    return {
      pages: [1],
      selected: 1,
      total: 0
    }
  },
  methods: {
    setTotal (total) {
      this.total = Math.ceil(total/6)
      let endPage = (this.total < 5)?this.total:5
      this.fillPage(1, endPage)
    },
    fillPage (startPage,endPage) {
      this.pages = []
      for(let i = startPage; i <= endPage; i ++) {
        this.pages.push(i)
      }
    },
    changePage (page) {
      if (page <= 0 || page > this.total) {
        return
      }
      this.selected = page
      this.$emit('pageChange', page) //出发页数改变事件
      if (page < this.pages[0]) { //点左按钮翻到上一整页
        let startPage = ((page - 4) > 0)?(page - 4):1 // 五个一页 找到翻页后起始页
        this.fillPage(startPage, (startPage + 4))
      } else if (page > this.pages[4]) { //点右按钮翻到下一个整页
        let endPage = ((page + 4) <= this.total)?(page + 4):this.total //找到末尾页
        let startPage = endPage - 4
        this.fillPage(startPage, endPage)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.page{
  margin: 30px auto;
  display: inline-block;
  img{
    width:35px;
    cursor: pointer;
    margin: 0 30px;
  }
  .leftArrow{
    transform: rotate(180deg);
  }
}
.numbers{
  display: inline-block;
  vertical-align: top;
  line-height: 35px;
  font-size: 14px;
  font-weight: 600;
  span{
    margin: 0 20px;
    cursor: pointer;
  }
  span:hover{
    color: #fa8b5f;
  }
  .selected{
    font-size: 16px;
    color: #fa8b5f;
    text-decoration: line-through;
  }
}
</style>


