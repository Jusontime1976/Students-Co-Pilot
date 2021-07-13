  
import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDh1LkjjvKlXIxsc5Hyl9Mj_UPfPAVtzI8",
    authDomain: "student-s-co-pilot.firebaseapp.com",
    projectId: "student-s-co-pilot",
    storageBucket: "student-s-co-pilot.appspot.com",
    messagingSenderId: "671404609478",
    appId: "1:671404609478:web:99f0de4de4f978b7d4ecc7",
    measurementId: "G-QLH7WVQ7EF"
  };

const fire=firebase.initializeApp(firebaseConfig);

export default fire;