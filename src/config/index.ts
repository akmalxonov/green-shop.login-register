// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD63EbyuGRrz8xKRkApWd-tMSVlwmxYpE0",
  authDomain: "green-shop-79b82.firebaseapp.com",
  projectId: "green-shop-79b82",
  storageBucket: "green-shop-79b82.firebasestorage.app",
  messagingSenderId: "231589544145",
  appId: "1:231589544145:web:ff54169d936f7dbcb7c5f0",
  measurementId: "G-GERTKC6EMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
