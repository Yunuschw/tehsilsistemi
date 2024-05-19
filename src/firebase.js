import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-cbb59.firebaseapp.com",
  projectId: "tutorial-cbb59",
  storageBucket: "tutorial-cbb59.appspot.com",
  messagingSenderId: "23809769791",
  appId: "1:23809769791:web:cdbef727e1f05fb882538a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
