import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCItLXvruVuxA2nijVsA_v1PPP9XJ4tYzk",
  authDomain: "prepwise-e52b6.firebaseapp.com",
  projectId: "prepwise-e52b6",
  storageBucket: "prepwise-e52b6.firebasestorage.app",
  messagingSenderId: "539154116594",
  appId: "1:539154116594:web:e502b935564272868d856b",
  measurementId: "G-Q2PXFM7SKY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);