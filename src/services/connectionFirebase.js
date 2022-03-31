import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

let firebaseConfig = {
  apiKey: "AIzaSyBo0uDcwsclzMoIcZNe4sk3CLXw0GLZTNU",
  authDomain: "appbasico-b5fcb.firebaseapp.com",
  databaseURL: "https://appbasico-b5fcb-default-rtdb.firebaseio.com",
  projectId: "appbasico-b5fcb",
  storageBucket: "appbasico-b5fcb.appspot.com",
  messagingSenderId: "324235702048",
  appId: "1:324235702048:web:fcb7a895a8836aec223145",
  measurementId: "G-QSDW0080J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;