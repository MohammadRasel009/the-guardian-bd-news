// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhrYNqyCp9jJl7PQL3h0WX0zB1mWSVZPo",
  authDomain: "the-guardian-bd-news.firebaseapp.com",
  projectId: "the-guardian-bd-news",
  storageBucket: "the-guardian-bd-news.appspot.com",
  messagingSenderId: "899783479322",
  appId: "1:899783479322:web:d94f1ffcec8cb1c5a6c1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;