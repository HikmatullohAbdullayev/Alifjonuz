


// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkxYxxmzBzhDj6cO7-f1NzUHZnuVrvHkw",
    authDomain: "zamaxshariy-auth.firebaseapp.com",
    databaseURL: "https://zamaxshariy-auth-default-rtdb.firebaseio.com",
    projectId: "zamaxshariy-auth",
    storageBucket: "zamaxshariy-auth.appspot.com",
    messagingSenderId: "670648080545",
    appId: "1:670648080545:web:17fbde93b946074e8f78e0",
    measurementId: "G-FY1FL0VJB7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
export { analytics, db, auth };
