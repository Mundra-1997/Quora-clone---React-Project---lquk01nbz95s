// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAR0sL8aAYYJDPbKqbT3jqustqNCs3btWI",
    authDomain: "quora-9b4be.firebaseapp.com",
    projectId: "quora-9b4be",
    storageBucket: "quora-9b4be.appspot.com",
    messagingSenderId: "615509714474",
    appId: "1:615509714474:web:6e5917101ca9eae84d0553",
    measurementId: "G-SQZC9DFYYB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export {auth,provider,provider1} 
export default db;
