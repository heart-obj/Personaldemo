<template>
  <div id="app">
  	<footerTabs></footerTabs>
    <router-view/>
  </div>
</template>

<script>
	import footerTabs from './components/componentindex';
	export default {
	  name: '',
	  components:{
	  	footerTabs:footerTabs
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
</style>
