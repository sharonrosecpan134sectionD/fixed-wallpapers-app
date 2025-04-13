// app/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQEFKbe-sd_j4Hd9_9UAGU8JIfJrTYXS0",
  authDomain: "winter25-1844a.firebaseapp.com",
  projectId: "winter25-1844a",
  storageBucket: "winter25-1844a.appspot.com",
  messagingSenderId: "476719440621",
  appId: "1:476719440621:web:64399b4762b26a198d62e4"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firebase Auth instance
export const auth = getAuth(app);
