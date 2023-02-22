import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgWEpAK7Co_xyPo-Sve5S6BC8SDBsDVRA",
  authDomain: "chat-c9f4f.firebaseapp.com",
  projectId: "chat-c9f4f",
  storageBucket: "chat-c9f4f.appspot.com",
  messagingSenderId: "485694950015",
  appId: "1:485694950015:web:5723cddac4be019b198d4a"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// authentication
export const auth = getAuth()
// Create a root reference
export const storage = getStorage();