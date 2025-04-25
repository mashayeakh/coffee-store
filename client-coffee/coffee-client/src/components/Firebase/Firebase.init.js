// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEjrjuXelBrS6rgpVDQLsvEI3ZJiNfgZI",
    authDomain: "coffee-store-10806.firebaseapp.com",
    projectId: "coffee-store-10806",
    storageBucket: "coffee-store-10806.firebasestorage.app",
    messagingSenderId: "1062678407704",
    appId: "1:1062678407704:web:55fc78e20fb9dbc315f16d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
