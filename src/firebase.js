import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcYRxT7z0r-eFJ2r37H2eq8mk9NRJiZoA",
  authDomain: "chat-app-a1305.firebaseapp.com",
  projectId: "chat-app-a1305",
  storageBucket: "chat-app-a1305.appspot.com",
  messagingSenderId: "293419945318",
  appId: "1:293419945318:web:b2cc2f34f0fce1c6354ca7",
  measurementId: "G-NGXZC9W7HF"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
