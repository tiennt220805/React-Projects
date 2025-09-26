// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPwo4M4sDZ4guT0Up31JUs66ohdJrwhew",
  authDomain: "vite-contact-c5537.firebaseapp.com",
  projectId: "vite-contact-c5537",
  storageBucket: "vite-contact-c5537.firebasestorage.app",
  messagingSenderId: "647608513893",
  appId: "1:647608513893:web:90e6e8e81e5f186e1a5d8c",
  measurementId: "G-499QZ54GST",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
