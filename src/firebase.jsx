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
export const register = (email, password, deneme, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      deneme("Kullanıcı oluşturuldu!");
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      deneme(`${error}`);
      navigate("/register");
    });
};

// login
export const login = async (email, password, deneme) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    await deneme("baarılı");
    return user;
  } catch (error) {}
};

// signout
export const signout = async () => {
  await signOut(auth);
  return true;
};

// google login
// const provider = new GoogleAuthProvider();
// export const googleLogin = async () => {
//   try {
//     const { user } = await signInWithPopup(auth, provider);
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const mevcutKullanici = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export default app;
