import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwliUTDPsvg3woX4QBPViMFLD_EeZwtxY",
    authDomain: "ivan-test-project-808be.firebaseapp.com",
    projectId: "ivan-test-project-808be",
    storageBucket: "ivan-test-project-808be.appspot.com",
    messagingSenderId: "270073654328",
    appId: "1:270073654328:web:51374115ce7fb638c0cacd",
    measurementId: "G-H3EXFP9NK4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);