<template>
  <div class="mainContainer">
    <router :type="'gallery'"></router>
    <div class="header">
      <div class="cover">
        <p class="sub">For a amateur designer artificial work / <br>studio website /</p>
        <div class="main">
          <p class="chinese">照片画廊</p>
          <p>PHOTO</p>
          <p>GALLERY</p>
        </div>
      </div>
    </div>
    <selector></selector>
    <gallery-modal :galleryInfo="galleryDetail" v-if="isOpenModal" @closeModal="closeModal"></gallery-modal>
    <div class="bodyContainer">
      <div class="item" v-for="(item ,index) in galleryInfo" :key="index" @click="openModal(item)">
        <div class="imgContainer" :style="'background-image:url(' + item.img + ')'"></div>
        <p class="title">{{item.name}}<span class="new">NEW</span></p>
        <p class="tag">
          <span v-for="(items, Index) in item.tag" :key="Index">{{items}}</span>
        </p>
        <p class="desc">{{item.desc}}</p>
        <div class="extra">
          <img src="../../assets/eye.svg"><span>{{item.watch}}</span>
          <img src="../../assets/heart.svg"><span>{{item.like}}</span>
        </div>
      </div>
    </div>
    <page ref="page"></page>
  </div>  
</template>
<script>
import router from '../common/router'
import selector from '../common/selector'
import page from '../common/page'
import galleryModal from './galleryModal'
export default {
  name: 'gallery',
  components: {
    router,
    selector,
    page,
    galleryModal
  },
  data () {
    return {
      isOpenModal: false,
      galleryInfo: [],
      galleryDetail: {}
    }
  },
  methods: {
    closeModal () {
      this.isOpenModal = false
    },
    openModal (info) {
      this.galleryDetail = info
      this.isOpenModal = true
    },
    getData () {
      this.$axios.get('/getGalleryList')
      .then ( (res) => {
        this.galleryInfo = res.data.data
        this.galleryInfo.forEach( (item) => {
          item.tag = item.tag.split(';')
        })
        this.$refs.page.setTotal(res.data.total)
      })
      .catch ( (res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.getData(0)
  }
}
</script>
<style lang="less" scoped>
.mainContainer{
  width: 100%;
}
.header{
  width: 70%;
  height: 400px;
  margin: 30px 15%;
  position: relative;
  background-image: url(../../assets/gallery.jpg);
  background-size: contain;
  background-position: center;
  color: #fff;
  text-align: left;
  .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    .sub{
      position: absolute;
      bottom: 10%;
      right: 10%;
    }
    .main{
      font-size: 45px;
      font-weight: 600;
      position: absolute;
      left: 20%;
      top: 50%;
      transform: translateY(-50%);
      letter-spacing: 7px;
      .chinese{
        margin-left: -25px;
        font-size: 30px;
      }
    }
  }
}
.bodyContainer{
  width: 80%;
  margin: 0 10%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .item{
    width: 31%;
    height: 445px;
    margin: 0 1% 30px 1%;
    box-sizing: border-box;
    padding: 20px;
    text-align: left;
    position: relative;
    .imgContainer{
      width: 100%;
      height: 45%;
      background-image: url('../../assets/dailyLife.jpg');
      background-size: cover;
      background-position: center;
    }
    .title{
      font-size: 16px;
      font-weight: 600;
      margin: 25px 0;
      .new{
        margin-left: 15px;
        font-size: 12px;
        color: #fff;
        background: #fa8b5f;
        padding: 1px;
      }
    }
    .tag{
      color: #fa8b5f;
      font-size: 13px;
      font-weight: 600;
      span{
        margin-right: 10px;
      }
    }
    .desc{
      margin-top: 25px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
    .extra{
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: flex;
      color: #666;
      font-weight: 600;
      font-size: 14px;
      img{
        width: 20px;
        height: 20px;
        margin: 0 10px 0 20px;
      }
    }
  }
}
</style>


