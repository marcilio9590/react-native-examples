import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyArtIPSYZqFRMSZIc2Ehq4zVISDO_g2FUM",
  authDomain: "meuapp-8156c.firebaseapp.com",
  projectId: "meuapp-8156c",
  storageBucket: "meuapp-8156c.appspot.com",
  messagingSenderId: "711204706352",
  appId: "1:711204706352:web:dc9b0ca5f7b6b680f8b5f5",
  measurementId: "G-5YWKTBZYQ0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;