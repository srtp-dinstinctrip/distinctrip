<template>
  <div id="app">
    <el-container>
      <el-header>
        <index-header></index-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <index-bottom></index-bottom>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import indexHeader from '@/components/index/IndexHeader'
import indexBottom from '@/components/index/IndexBottom'
export default {
  name: 'app',
  components: {
    indexHeader,
    indexBottom
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
