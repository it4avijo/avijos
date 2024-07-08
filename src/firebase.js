import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWS-i7-kPtO3frvy81s8acChgxPpt0B2k",
  authDomain: "avijo-48c48.firebaseapp.com",
  projectId: "avijo-48c48",
  storageBucket: "avijo-48c48.appspot.com",
  messagingSenderId: "1027908636450",
  appId: "1:1027908636450:web:4d44a3115f212f23371f7b",
  measurementId: "G-T8DCVDFEBN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
