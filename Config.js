import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBeCtXAyVYigFvU4Ru2VoOMnGf_93sdqgg",
    authDomain: "e-library-f3c4a.firebaseapp.com",
    projectId: "e-library-f3c4a",
    storageBucket: "e-library-f3c4a.appspot.com",
    messagingSenderId: "993201892807",
    appId: "1:993201892807:web:a152ea3f932ee87a0efde2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();