// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import  {getAuth} from "firebase/auth";
import  {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqiwtQ3KyFGM1uEA0VfEG_D4Zrd_LvX74",
    authDomain: "pemock-cfde5.firebaseapp.com",
    projectId: "pemock-cfde5",
    storageBucket: "pemock-cfde5.firebasestorage.app",
    messagingSenderId: "922903291242",
    appId: "1:922903291242:web:441acbc7a74562525af113",
    measurementId: "G-X8L7WRN8MS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export  const  auth = getAuth(app);
export  const db = getFirestore(app);
