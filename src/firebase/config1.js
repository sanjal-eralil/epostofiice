




import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBFXFbC9tb81OvTybTkBt0hctiLVy-WVrw",
    authDomain: "postoffice-324e1.firebaseapp.com",
    projectId: "postoffice-324e1",
    storageBucket: "postoffice-324e1.appspot.com",
    messagingSenderId: "646553248028",
    appId: "1:646553248028:web:b6b0883a736d0fbbde9ad9",
    measurementId: "G-3LNNDNT2E8"
  };


  const Firebase = initializeApp(firebaseConfig);

  // Get a reference to Firestore
  
  
  export default Firebase; 
 

 