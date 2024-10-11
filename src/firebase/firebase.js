// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIeHl1nrXMgIMqgzZSUxltHtJhFdWOiQ",
  authDomain: "storyteller-7b768.firebaseapp.com",
  projectId: "storyteller-7b768",
  storageBucket: "storyteller-7b768.appspot.com",
  messagingSenderId: "16729574198",
  appId: "1:16729574198:web:64ad2f111da02d1fafc197",
  measurementId: "G-W0KEEWKLYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth , db} ;