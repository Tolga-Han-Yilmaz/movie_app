import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// register
export const register = (email, password, navigate, wrong, success) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      success("user created");
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      wrong(`please check your information`);
      navigate("/register");
    });
};

// login
export const login = async (email, password, wrong, success, navigate) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    await success("You have successfully logged in.");
    navigate("/");
    return user;
  } catch (error) {
    console.log(error);
    await wrong("please check your information");
  }
};

// signout
export const signout = async () => {
  await signOut(auth);

  return true;
};

// google login
const provider = new GoogleAuthProvider();
export const googleLogin = (success, navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      success("You have successfully logged in.");
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const userCurrent = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export default app;
