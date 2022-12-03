import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1tFZfg68cs6fQM88pFoWHDkNg_USdb_U",
  authDomain: "fir-789dc.firebaseapp.com",
  projectId: "fir-789dc",
  storageBucket: "fir-789dc.appspot.com",
  messagingSenderId: "133611676466",
  appId: "1:133611676466:web:f1d1e04271f38c4d7b6d2b",
  measurementId: "G-F95861BDKH"
};

const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, backend  }

