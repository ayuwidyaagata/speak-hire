import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOiaYDjbiFWdtQeKakyqc5Rp1V6V4eIH4",
  authDomain: "speakhire-9af5d.firebaseapp.com",
  projectId: "speakhire-9af5d",
  storageBucket: "speakhire-9af5d.firebasestorage.app",
  messagingSenderId: "42503933541",
  appId: "1:42503933541:web:753ee009612869107c408c",
  measurementId: "G-PWEBCG9Z91"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
