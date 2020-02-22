<template>
  <div id="index">
    <index-banner></index-banner>
    <index-searchbar></index-searchbar><br><br><br>
    <!-- <IndexTurn></IndexTurn><br><br><br> -->
  </div>
</template>


<script>
import IndexSearchbar from './index/IndexSearchbar.vue'
// import IndexTurn from './index/IndexTurn.vue'
import IndexBanner from './index/IndexBanner.vue'

export default {
  name: 'index',
  components: {
    IndexSearchbar,
    // IndexTurn,
    IndexBanner
  }
}
</script>

<style scoped>
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
