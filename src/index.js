// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKPRKcJk7aTUA1LbN9NUDN47EucE_kG9c",
  authDomain: "rojin-portfolio.firebaseapp.com",
  projectId: "rojin-portfolio",
  storageBucket: "rojin-portfolio.appspot.com",
  messagingSenderId: "599374426216",
  appId: "1:599374426216:web:dfb260132cc24c08558bdd",
  measurementId: "G-1G4GTCJJ31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);