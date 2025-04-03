import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcfXFOm1rCxsaYTOnU2b8C2qTP3KrhhLw",
    authDomain: "comment-9acf2.firebaseapp.com",
    projectId: "comment-9acf2",
    storageBucket: "comment-9acf2.firebasestorage.app",
    messagingSenderId: "788033438952",
    appId: "1:788033438952:web:575fd958a7586dcb73355d",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
