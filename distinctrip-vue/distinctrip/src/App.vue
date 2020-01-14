<template>
  <div id="app">
    <index-header></index-header>
    <index-banner></index-banner>
    <index-searchbar></index-searchbar><br><br><br>
    <IndexTurn></IndexTurn><br><br><br>
    <IndexBottom></IndexBottom>

    <IndexScenicDetail time="周一 - 周四 9:00-19:00" tele="12345678901" cost="免费" address="四川省成都市" way="蓉二号线"></IndexScenicDetail>
    <IndexScenicBrief mytitle="怎么玩" mycontent="成都早就是非常热的旅游城市了，如果你是文青，杜甫草堂、武侯祠等地你一定喜欢；如果你是古镇迷，成都有街子古镇、黄龙溪、洛带等地；如果你爱美女美食，那一定要去锦里、宽窄巷子......"></IndexScenicBrief>
    <IndexScenicAttention mycontent="成都早就是非常热的旅游城市了，如果你是文青，杜甫草堂、武侯祠等地你一定喜欢；如果你是古镇迷，成都有街子古镇、黄龙溪、洛带等地；如果你爱美女美食，那一定要去锦里、宽窄巷子......"></IndexScenicAttention>
    <IndexScenicLocation></IndexScenicLocation>

  </div>
</template>


<script>
import IndexBottom from './components/IndexBottom.vue'
import IndexHeader from './components/IndexHeader.vue'
import IndexSearchbar from './components/IndexSearchbar.vue'
import IndexTurn from './components/IndexTurn.vue'
import IndexBanner from './components/IndexBanner.vue'

import IndexScenicDetail from './components/IndexScenicDetail.vue'
import IndexScenicBrief from './components/IndexSenicBrief.vue'
import IndexScenicAttention from './components/IndexScenicAttention.vue'
import IndexScenicLocation from './components/IndexSenicLocation.vue'

export default {
  name: 'app',
  components: {
    IndexBottom,
    IndexHeader,
    IndexSearchbar,
    IndexTurn,
    IndexBanner,
    IndexScenicDetail,
    IndexScenicBrief,
    IndexScenicAttention,
    IndexScenicLocation
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
