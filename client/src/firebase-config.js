import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ozn59Tka19RryYGxnzbu6txCBay50bM",
  authDomain: "stocksup-1ce10.firebaseapp.com",
  projectId: "stocksup-1ce10",
  storageBucket: "stocksup-1ce10.appspot.com",
  messagingSenderId: "683017954880",
  appId: "1:683017954880:web:ce1760c080725336fd61a5",
  measurementId: "G-VS61PP0ZL1"
};

// Initialize Firebase
let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

//export database and firebase app to use in app
const db = getFirestore(firebaseApp, {});
export { db, firebaseApp };
