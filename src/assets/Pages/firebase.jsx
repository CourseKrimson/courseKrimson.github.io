// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYeWoa0iKtDr9VV2iSZ9tZQqyWuBHWXnU",
  authDomain: "opencourses-6a478.firebaseapp.com",
  projectId: "opencourses-6a478",
  storageBucket: "opencourses-6a478.appspot.com",
  messagingSenderId: "139996396922",
  appId: "1:139996396922:web:5e0aec9a81d6aa30182ac3",
  measurementId: "G-1T13ESR8EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;