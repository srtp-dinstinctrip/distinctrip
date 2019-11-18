<template>
  <div id="app">
    <index-header></index-header>
    <!-- <index-banner></index-banner> -->
    <index-searchbar></index-searchbar><br><br><br>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <IndexBottom></IndexBottom>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IndexBottom from './components/IndexBottom.vue'
import IndexHeader from './components/IndexHeader.vue'
import IndexSearchbar from './components/IndexSearchbar.vue'
// import IndexBanner from './components/IndexBanner.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
