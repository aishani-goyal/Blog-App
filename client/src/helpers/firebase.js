import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "mern-blog-27f2a.firebaseapp.com",
  projectId: "mern-blog-27f2a",
  storageBucket: "mern-blog-27f2a.firebasestorage.app",
  messagingSenderId: "991734321070",
  appId: "1:991734321070:web:8bd9d329684d06f663c23f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}
