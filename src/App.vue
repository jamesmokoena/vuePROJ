<template>
  <img class="logo" src="./assets/logo-1932539__340.webp"  >
  
  <signup/>
</template>

<script>
import signup from './components/signup.vue'
export default {
  name: 'App',
  components:{
    signup 
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style> 
.logo{
    width: 150px;
    padding-bottom: 30px;
    
}

</style>
