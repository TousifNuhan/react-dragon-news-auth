// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRU8o3E-ocOjVofzBl3ZHbY3aUxeDTPFQ",
  authDomain: "react-dragon-news-auth-acbbe.firebaseapp.com",
  projectId: "react-dragon-news-auth-acbbe",
  storageBucket: "react-dragon-news-auth-acbbe.appspot.com",
  messagingSenderId: "892931100194",
  appId: "1:892931100194:web:94721e355aef2f7508c47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app