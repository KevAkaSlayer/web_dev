// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9GtacvHqZLQMMpkjXJECiZ-nCqaO8Cyc",
  authDomain: "emailauth-84847.firebaseapp.com",
  projectId: "emailauth-84847",
  storageBucket: "emailauth-84847.firebasestorage.app",
  messagingSenderId: "668174638766",
  appId: "1:668174638766:web:38a01035d4af0e6adb573f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
