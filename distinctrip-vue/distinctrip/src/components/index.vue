<template>
  <div id="index">
    <index-header></index-header>
    <index-banner></index-banner>
    <index-searchbar></index-searchbar><br><br><br>
    <!-- <IndexTurn></IndexTurn><br><br><br> -->
    <IndexBottom></IndexBottom>
  </div>
</template>


<script>
import IndexBottom from './index/IndexBottom.vue'
import IndexHeader from './index/IndexHeader.vue'
import IndexSearchbar from './index/IndexSearchbar.vue'
// import IndexTurn from './index/IndexTurn.vue'
import IndexBanner from './index/IndexBanner.vue'

export default {
  name: 'index',
  components: {
    IndexBottom,
    IndexHeader,
    IndexSearchbar,
    // IndexTurn,
    IndexBanner
  }
}
</script>

<style>
/* #app {
  padding: 0;
  border: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; 
} */
</style>
