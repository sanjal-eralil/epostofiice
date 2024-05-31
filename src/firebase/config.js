// Import the specific Firebase modules you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Add other Firebase services if needed

// Your Firebase config


// Initialize Firebase
// or any other Firebase module you want to export



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFXFbC9tb81OvTybTkBt0hctiLVy-WVrw",
    authDomain: "postoffice-324e1.firebaseapp.com",
    projectId: "postoffice-324e1",
    storageBucket: "postoffice-324e1.appspot.com",
    messagingSenderId: "646553248028",
    appId: "1:646553248028:web:b6b0883a736d0fbbde9ad9",
    measurementId: "G-3LNNDNT2E8"
  };


  const app = initializeApp(firebaseConfig);

  // Get a reference to Firestore
  const firestore = getFirestore(app);
  
  export default firestore; 


 