// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATaO98IhQ3pkCZGuzKCVUwX7CjH4LanyM",
  authDomain: "movies-7163f.firebaseapp.com",
  projectId: "movies-7163f",
  storageBucket: "movies-7163f.appspot.com",
  messagingSenderId: "565256210622",
  appId: "1:565256210622:web:7ce52deaedd567b20df6ef",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signout = async () => {
  await signOut(auth);
  return true;
};

const provider = new GoogleAuthProvider();
export const googleLogin = async () => {
  const { user } = await signInWithPopup(auth, provider);
  return user;
};
export default app;
