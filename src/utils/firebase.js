// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqM6MnlPupTyQ0fHEkxYvfyeSbA8Aqbtg",
  authDomain: "netflixgpt2-d29fa.firebaseapp.com",
  projectId: "netflixgpt2-d29fa",
  storageBucket:"netflixgpt2-d29fa.firebasestorage.app",
  //storageBucket: "netflixgpt2-d29fa.appspot.com",
  messagingSenderId: "771715618427",
  appId: "1:771715618427:web:5e4a233f38537675cf34de",
  measurementId: "G-TBSQ5H64N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();