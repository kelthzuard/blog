<template>
    <div>
        <div class="part">
            <span>文章名：</span> 
            <input type="text">
        </div>
        <mavon-editor/>
    </div>
</template>
<script>    
export default {
    name: 'editpage',
    data () {
        return {

        }
    }
}
</script>
<style lang="less">
.part{
    padding: 20px 0 20px 50px;
    text-align: left;
}
</style>