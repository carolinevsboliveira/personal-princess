import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCOyzNg0xNfb75ZW8KAvgkpTfbJNWc2wvE",
  authDomain: "photogallery-48237.firebaseapp.com",
  projectId: "photogallery-48237",
  storageBucket: "photogallery-48237.appspot.com",
  messagingSenderId: "300680969423",
  appId: "1:300680969423:web:24b45aa0a034bce8788bba"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, firestore, timeStamp}