//? Do not send firebase Config to repositories
//? Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5LkvQSbOCdlxW7VlQngji0bKwMtNWsTs",
  authDomain: "simple-firebase-authenti-b1bac.firebaseapp.com",
  projectId: "simple-firebase-authenti-b1bac",
  storageBucket: "simple-firebase-authenti-b1bac.firebasestorage.app",
  messagingSenderId: "734489850525",
  appId: "1:734489850525:web:522dad4d71c9fbc6c19a74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initializing the firebase Authentication
export const auth = getAuth(app);
