import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD9IyS9ELHoQcLpSHVVJ83Denph99gS6wQ",
  authDomain: "translator-app-saas.firebaseapp.com",
  projectId: "translator-app-saas",
  storageBucket: "translator-app-saas.appspot.com",
  messagingSenderId: "491779038815",
  appId: "1:491779038815:web:d9374643b8195dd19805ea",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
