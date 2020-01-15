<template>
<div id="box">
  <el-carousel indicator-position="inside" height="500px">
    <el-carousel-item >
      <img src="../assets/image/img1.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="../assets/image/img2.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="../assets/image/img3.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="../assets/image/img4.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
    name: 'IndexBanner',
    props:{

    }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #box{
    width: 1300px;
    height: 500px;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    overflow: hidden;  /*  解除外边距塌陷  清除浮动  溢出隐藏 */
    border-radius: 10px;
    padding-bottom: 20px;
  } 
  img{
    width: 1300px;
    height: 500px;
    vertical-align: top;
    border-radius: 10px;
  }
</style>