import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAHtUdP-RdmNV0Cu85xq0E0kiWsGuDpZ1Y",
    authDomain: "spares-nation-4b2d6.firebaseapp.com",
    projectId: "spares-nation-4b2d6",
    storageBucket: "spares-nation-4b2d6.appspot.com",
    messagingSenderId: "115223484014",
    appId: "1:115223484014:web:1c0612c557b34e86a1b87f",
    measurementId: "G-SDTGCY8NJC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {  db, auth};