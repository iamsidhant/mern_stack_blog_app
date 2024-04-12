// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-blog-app-b4a1f.firebaseapp.com",
  projectId: "mern-stack-blog-app-b4a1f",
  storageBucket: "mern-stack-blog-app-b4a1f.appspot.com",
  messagingSenderId: "825502448846",
  appId: "1:825502448846:web:a5e5dc254a873e5466a49f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);