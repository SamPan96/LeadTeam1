import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyyPdpwUUF2r18t8S8e_ZoBTke_-by0ko",
    authDomain: "lead-p.firebaseapp.com",
    projectId: "lead-p",
    storageBucket: "lead-p.appspot.com",
    messagingSenderId: "639143757120",
    appId: "1:639143757120:web:d1c35bac20828ca119e6a5",
    measurementId: "G-GTYKXN0KH3"
  };
  // Initialize Firebase 
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider();
  
  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
         if (userExists(result.uid)){
            navigator.navigator
         }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const userExists = (uid) => {

  }
  
  export const createUser = (user) => {
    
  }