
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Io7zTteQGMIOS3i0ZfZYj-F2bbPzAnw",
  authDomain: "ecommercecoder-2d8b0.firebaseapp.com",
  projectId: "ecommercecoder-2d8b0",
  storageBucket: "ecommercecoder-2d8b0.appspot.com",
  messagingSenderId: "808387170",
  appId: "1:808387170:web:65dc122f4dfa18b05e873b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)