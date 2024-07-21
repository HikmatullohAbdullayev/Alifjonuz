// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };

// firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAkxYxxmzBzhDj6cO7-f1NzUHZnuVrvHkw",
//   authDomain: "zamaxshariy-auth.firebaseapp.com",
//   databaseURL: "https://zamaxshariy-auth-default-rtdb.firebaseio.com",
//   projectId: "zamaxshariy-auth",
//   storageBucket: "zamaxshariy-auth.appspot.com",
//   messagingSenderId: "670648080545",
//   appId: "1:670648080545:web:17fbde93b946074e8f78e0",
//   measurementId: "G-FY1FL0VJB7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// export { db };
