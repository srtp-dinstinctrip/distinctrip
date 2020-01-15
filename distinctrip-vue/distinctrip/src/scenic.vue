<template>
  <div id="scenic">
    <ScenicDetail time="周一 - 周四 9:00-19:00" tele="12345678901" cost="免费" address="四川省成都市" way="蓉二号线"></ScenicDetail>
    <ScenicBrief mytitle="怎么玩" mycontent="成都早就是非常热的旅游城市了，如果你是文青，杜甫草堂、武侯祠等地你一定喜欢；如果你是古镇迷，成都有街子古镇、黄龙溪、洛带等地；如果你爱美女美食，那一定要去锦里、宽窄巷子......"></ScenicBrief>
    <ScenicAttention mycontent="成都早就是非常热的旅游城市了，如果你是文青，杜甫草堂、武侯祠等地你一定喜欢；如果你是古镇迷，成都有街子古镇、黄龙溪、洛带等地；如果你爱美女美食，那一定要去锦里、宽窄巷子......"></ScenicAttention>
    <ScenicLocation></ScenicLocation>
  </div>
</template>


<script>
import ScenicDetail from './components/ScenicDetail.vue'
import ScenicBrief from './components/ScenicBrief.vue'
import ScenicAttention from './components/ScenicAttention.vue'
import ScenicLocation from './components/IndexScenicLocation.vue'

export default {
  name: 'scenic',
  components: {
    ScenicDetail,
    ScenicBrief,
    ScenicAttention,
    ScenicLocation
  }
}
</script>

<style>
#app {
  padding: 0;
  border: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
