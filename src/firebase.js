// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD2Gsa_kQQHf5h9-v7yu_qQTRUN3ryIRkM",
    authDomain: "capstone-avatar.firebaseapp.com",
    projectId: "capstone-avatar",
    storageBucket: "capstone-avatar.appspot.com",
    messagingSenderId: "1052576098815",
    appId: "1:1052576098815:web:1bedd2ee5845aaefa29fca",
    measurementId: "G-L6F16TQ7J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//  Fot Social Media Login Providers 
export const provider = new GoogleAuthProvider();
export const githubprovider = new GithubAuthProvider();
export const facebookprovider = new FacebookAuthProvider();