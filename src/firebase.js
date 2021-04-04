import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUs95gjOJzzb2ozYSmyM0-vr-O3qiTrBs",
  authDomain: "facebook-messenger-clone-c1d12.firebaseapp.com",
  projectId: "facebook-messenger-clone-c1d12",
  storageBucket: "facebook-messenger-clone-c1d12.appspot.com",
  messagingSenderId: "356670216941",
  appId: "1:356670216941:web:1d5b1d2b2cd468f5514ae4",
  measurementId: "G-EBEJ080898",
});

const db = firebaseApp.firestore();

export default db;
