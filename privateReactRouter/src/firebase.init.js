// Import the functions you need from the SDKs you need
import { initializeApp ,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIHqqKiiaejZUWrigHf4bqX6hTZT-uHZA",
  authDomain: "reactprivaterouter.firebaseapp.com",
  projectId: "reactprivaterouter",
  storageBucket: "reactprivaterouter.firebasestorage.app",
  messagingSenderId: "211926440293",
  appId: "1:211926440293:web:ae0d3b72b83038c6db298c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
