import { createApp } from 'vue'
import App from './App.vue'// Import the functions you need from the SDKs you need
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC_lgs5645CBBEuMtNlY-NhjQnmKrlWh_8",
  authDomain: "vuejsproject-8dd5e.firebaseapp.com",
  projectId: "vuejsproject-8dd5e",
  storageBucket: "vuejsproject-8dd5e.appspot.com",
  messagingSenderId: "958450086098",
  appId: "1:958450086098:web:05b9f3a4010eae7887fd0b",
  measurementId: "G-Z670X615H4"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
