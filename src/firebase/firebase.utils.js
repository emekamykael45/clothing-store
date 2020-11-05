import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAE2KX_DVH2qRbasr-gdyZfKsQ1d99ItIo",
  authDomain: "crown-db-c002c.firebaseapp.com",
  databaseURL: "https://crown-db-c002c.firebaseio.com",
  projectId: "crown-db-c002c",
  storageBucket: "crown-db-c002c.appspot.com",
  messagingSenderId: "4715547834",
  appId: "1:4715547834:web:893126134b2c0bd4228683",
  measurementId: "G-LHZEBT9JYX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
