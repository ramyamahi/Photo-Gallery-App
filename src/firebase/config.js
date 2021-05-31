import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD4xr-7xJxoQE0ets6OrFrzxrJFbcOdflQ",
    authDomain: "photo-gallery-21dd9.firebaseapp.com",
    projectId: "photo-gallery-21dd9",
    storageBucket: "photo-gallery-21dd9.appspot.com",
    messagingSenderId: "282425039055",
    appId: "1:282425039055:web:c12650e4adaa804980ffba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp =  firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };    