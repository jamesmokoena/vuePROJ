<template>
  <img class="logo" src="./assets/logo-1932539__340.webp"  >
  <signup/>

  <div class="signup">
    <div class="main">  	
        <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signup">
                <form @submit="postData" method="post" >
                    <input type="text" v-model="name" name="txt" placeholder="Name" required="">
                    <input type="email" v-model="email" name="email" placeholder="Email" required="">
                    <input type="password" v-model="password" name="pswd" placeholder="Password" required="">
                    <button> Sign up</button>
                </form>
            </div>

            <div class="login">
                <form>
                    <label for="chk"  aria-hidden="true">Login</label>
                    <input type="email"  v-model="email" name="email" placeholder="Email" required="">
                    <input type="password"  v-model="password" name="pswd" placeholder="Password" required="">
                    <button v-on:click="signup"> Login</button>
                </form>
            </div>
    </div>
</div>




  
</template>

<script>
import console from 'console';
import signup from './components/signup.vue'
export default {
  name: 'App',
  components:{
    signup,
    data(){
      return {
        posts:{
        name: null,
        email: null,
        password: null
        } 
        
      }},
      
    methods: {
        postData(e){
        console.warn(this.posts)
         e.preventDefault();
         
        } 
  }}
 
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
