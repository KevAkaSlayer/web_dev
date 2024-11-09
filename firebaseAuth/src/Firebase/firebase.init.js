


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtPSxA_z0aiqjON4cvM0dCAa6KuIO52mM",
  authDomain: "fir-auth-b52dc.firebaseapp.com",
  projectId: "fir-auth-b52dc",
  storageBucket: "fir-auth-b52dc.firebasestorage.app",
  messagingSenderId: "446313464408",
  appId: "1:446313464408:web:d6a3051a3b3971f664002d",
  measurementId: "G-0Z8Q9T2G90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
