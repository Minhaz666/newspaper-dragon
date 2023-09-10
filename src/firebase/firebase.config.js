// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxshTl2ScX92oDVEdlrC7Si-DZKCaE4rg",
  authDomain: "news-dragon-client-cfb17.firebaseapp.com",
  projectId: "news-dragon-client-cfb17",
  storageBucket: "news-dragon-client-cfb17.appspot.com",
  messagingSenderId: "556862774737",
  appId: "1:556862774737:web:ac07ba7374f955a79c54f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;