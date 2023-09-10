import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjayT9yFbySCKXwDRpYcfgYruyI_LHyD8",
    authDomain: "shopify-c6f65.firebaseapp.com",
    databaseURL: "https://shopify-c6f65-default-rtdb.firebaseio.com",
    projectId: "shopify-c6f65",
    storageBucket: "shopify-c6f65.appspot.com",
    messagingSenderId: "822163351911",
    appId: "1:822163351911:web:dc2a5ee1cb57067288e7c2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const auth =getAuth();
  export {auth ,app};
  