// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2d61SZNpxPJ0ElAmC8I9Z2NhZfEl1pS0",
  authDomain: "horizen-travel.firebaseapp.com",
  projectId: "horizen-travel",
  storageBucket: "horizen-travel.appspot.com",
  messagingSenderId: "816379363752",
  appId: "1:816379363752:web:5caaa6474aa36b60a59d9d",
  measurementId: "G-Z5C66FZKFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);