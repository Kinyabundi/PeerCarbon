// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5UGDHdAB69QDSqvJNc3xgdWLFkCypZNQ",
  authDomain: "peercarbon.firebaseapp.com",
  projectId: "peercarbon",
  storageBucket: "peercarbon.appspot.com",
  messagingSenderId: "967768035372",
  appId: "1:967768035372:web:fbfb751dfceb570f708189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()
export { app, db, storage}