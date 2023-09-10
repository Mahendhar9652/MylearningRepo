import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from'firebase/database';
import {getStorage} from 'firebase/storage'


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





// Get a database reference to our blog
const db = getDatabase(app);
const auth = getAuth();
 const storage =getStorage(app) 
  export { auth, db ,storage};