// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCytDYpjUJZscZyy95_h7CYeBGAJC_7MkE",
  authDomain: "netflix-gpt-pr.firebaseapp.com",
  projectId: "netflix-gpt-pr",
  storageBucket: "netflix-gpt-pr.appspot.com",
  messagingSenderId: "997985145473",
  appId: "1:997985145473:web:d8adaba922c3f57aabb380",
  measurementId: "G-E916556YHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth()