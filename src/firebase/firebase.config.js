// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzRzywBYlnDWQ_V7WKZB-5mq4ZOnN5zA",
  authDomain: "dragon-news-resources-936d0.firebaseapp.com",
  projectId: "dragon-news-resources-936d0",
  storageBucket: "dragon-news-resources-936d0.appspot.com",
  messagingSenderId: "646854272036",
  appId: "1:646854272036:web:58d460f575387823eae4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;