import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

let firebaseConfig = {
  apiKey: "AIzaSyBChStaWtP7NQ2Jk5V8E6aUxSdIc89Fhww",
  authDomain: "database-carlos-lanches.firebaseapp.com",
  projectId: "database-carlos-lanches",
  storageBucket: "database-carlos-lanches.appspot.com",
  messagingSenderId: "675961307726",
  appId: "1:675961307726:web:e46685cbb290c58ce1791f"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}