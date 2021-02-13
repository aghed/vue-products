<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
    
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
  *{
    font-weight: normal;
    font-size:calc(12px + 0.3vw);
  }
  
  .center{
    text-align: center;
  }
</style>
