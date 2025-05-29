// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmbqa6OCjvEyZaScLulhoeJa3l8JQCJmI",
  authDomain: "school-management-b8259.firebaseapp.com",
  projectId: "school-management-b8259",
  storageBucket: "school-management-b8259.firebasestorage.app",
  messagingSenderId: "1099211906501",
  appId: "1:1099211906501:web:85b41a1d64a84cc5017fac",
  measurementId: "G-86CTPE88G8"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider, analytics };