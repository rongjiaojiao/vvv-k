<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px" style="height: 100%">
          <my-nav></my-nav>
        </el-aside>
        <el-main>
          <router-view/>
          </el-main>
      </el-container>
    </el-container>
    <!--<img src="./assets/logo.png">-->

  </div>
</template>

<script>
  import MyNav from 'components/common/MyNav'

export default {
  name: 'App',
  data(){
    return {}
  },
  components:{
    MyNav,
  }
}
</script>

<style>
  @import './assets/reset.css';

/* #app{
  height: 100%;
  } */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 60px; */
  height: 100%;
}
</style>
