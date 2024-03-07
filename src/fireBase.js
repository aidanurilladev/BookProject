import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYeSarPufgcltsdPY-4hOzhe_cqCZazpU",
  authDomain: "books-cb4e4.firebaseapp.com",
  projectId: "books-cb4e4",
  storageBucket: "books-cb4e4.appspot.com",
  messagingSenderId: "961563486985",
  appId: "1:961563486985:web:c12d12dba31a9481bf81d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
