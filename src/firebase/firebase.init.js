// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBaSnb5KURqjDewI-F-D3KkWX-6e5E6c",
  authDomain: "t-shirt-shop-e3d2e.firebaseapp.com",
  projectId: "t-shirt-shop-e3d2e",
  storageBucket: "t-shirt-shop-e3d2e.firebasestorage.app",
  messagingSenderId: "198003456015",
  appId: "1:198003456015:web:7b46a2a34e2719db574b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);