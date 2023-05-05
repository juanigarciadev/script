import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj4sT7JZUvY1MlfHybZkCQqInfo2o0EtY",
  authDomain: "react-ecommerce-juanigarciadev.firebaseapp.com",
  projectId: "react-ecommerce-juanigarciadev",
  storageBucket: "react-ecommerce-juanigarciadev.appspot.com",
  messagingSenderId: "983773718521",
  appId: "1:983773718521:web:71cf26a908aba0fdbd7f28",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
