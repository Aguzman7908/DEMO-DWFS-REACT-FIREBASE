// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD55phiyjJJw4shnQaT2HxPbScYj7Ge3A",
  authDomain: "crud-dwsf-ucamper.firebaseapp.com",
  projectId: "crud-dwsf-ucamper",
  storageBucket: "crud-dwsf-ucamper.appspot.com",
  messagingSenderId: "1080306212733",
  appId: "1:1080306212733:web:b71211ff6810411dd6b614",
  measurementId: "G-KDBBV5SL9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = 
