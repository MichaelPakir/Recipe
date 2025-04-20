// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQ3pBNJeW7zI3JnWmj5vnhrvD7r_j7qM",
  authDomain: "recipe-app-abd20.firebaseapp.com",
  projectId: "recipe-app-abd20",
  storageBucket: "recipe-app-abd20.firebasestorage.app",
  messagingSenderId: "607159761562",
  appId: "1:607159761562:web:3ff07a40439b6e89d77d23",
  measurementId: "G-262SDQ0M43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);
export const db = getFirestore(app);
