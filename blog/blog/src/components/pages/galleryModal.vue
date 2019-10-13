<template>
<transition name="fade">
    <div class="cover" @click="closeModal">
        <div class="modal" @click.stop>
            <div class="close" @click="closeModal">
                <img src="../../assets/close.svg">
            </div>
            <img src="../../assets/short.jpg" class="mainImg">
        </div>
    </div>
</transition>   
</template>
<script>
export default {
    name: 'galleryModal',
    data () {
        return {

        }
    },
    methods: {
        closeModal () {
            this.$emit('closeModal')
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.cover{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.3);
    z-index: 100;
}
.modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height: 90%;
    background: #f5f5f5;
    padding: 80px 20px 20px 20px;
    box-sizing: border-box;
    .close{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 30px;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mainImg{
        display: block;
        margin: 0 auto;
        max-height: 100%;
        max-width: 100%;
    }
}
</style>