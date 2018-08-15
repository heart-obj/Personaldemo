<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import indexcontent from './components/indexpage';
	export default {
	  name: '',
	  components:{
	  	indexcontent:indexcontent
	  }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-message-box{
	width: 280px !important;
}
</style>
