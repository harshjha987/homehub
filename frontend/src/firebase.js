// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a6eb7.firebaseapp.com",
  projectId: "mern-estate-a6eb7",
  storageBucket: "mern-estate-a6eb7.appspot.com",
  messagingSenderId: "504339089588",
  appId: "1:504339089588:web:4d694937ad3b97ea76efe1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


