<template>

    
    
    <div class="main">  	
        <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signup">
                <form>
                    <input type="text" name="txt" placeholder="Name" required="">
                    <input type="email"  name="email" placeholder="Email" required="">
                    <input type="password"  name="pswd" placeholder="Password" required="">
                    <button type="submit">  Sign up</button>
                </form>
            </div>

            
    </div>
    
      </template>
      
      <script>
       import {ref} from 'vue';
       import firebase from 'firebase';
      
      
      export default {
        setup() {
        const email = ref("");
        const password = ref("");

        const Register = () => {
            firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(data => console.log(data))
            .catch(err => alert(err.message));
        }
        return {
            Register,
            email,
            password
       
      }}
    }
      </script>

      <style>
    
      .logo{
        width: 150px;
        padding-bottom: 30px;
      }

      body{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Jost', sans-serif;
        background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
       }
       .main{
        width: 350px;
        height: 400px;
        background: rgb(182, 96, 96);
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 5px 20px 50px #000;
       }
       #chk{
        display: none;
       }
       .signup{
        position: relative;
        width:100%;
        height: 100%;
       }
       label{
        color: #fff;
        font-size: 2.3em;
        justify-content: center;
        display: flex;
        margin: 60px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s ease-in-out;
       }
       input{
        width: 60%;
        height: 20px;
        background: #e0dede;
        justify-content: center;
        display: flex;
        margin: 20px auto;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 5px;
       }
       button{
        width: 60%;
        height: 40px;
        margin: 10px auto;
        justify-content: center;
        display: block;
        color: #fff;
        background: #293ba1;
        font-size: 1em;
        font-weight: bold;
        margin-top: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: .2s ease-in;
        cursor: pointer;
       }
       button:hover{
        background: #6d44b8;
       }
       .login{
        height: 460px;
        background: #eee;
        border-radius: 60% / 10%;
        transform: translateY(-180px);
        transition: .8s ease-in-out;
       }
       .login label{
        color: #573b8a;
        transform: scale(.6);
       }
       
       #chk:checked ~ .login{
        transform: translateY(-500px);
       }
       #chk:checked ~ .login label{
        transform: scale(1);	
       }
       #chk:checked ~ .signup label{
        transform: scale(.6);
       }
    </style>
      