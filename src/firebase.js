
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB2N4jwMAONS951ok0Yo9JnX807hbmwoLw",
  authDomain: "portfolio-3227e.firebaseapp.com",
  projectId: "portfolio-3227e",
  storageBucket: "portfolio-3227e.appspot.com",
  messagingSenderId: "364635586023",
  appId: "1:364635586023:web:bf619607ede9af07995142",
  measurementId: "G-XKCNSXEKRT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);