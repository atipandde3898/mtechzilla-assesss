import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyALv4Pfr2dNS8jdyZKLGuYjUqk2XRsEQTI",
  authDomain: "pomodoro-app-67f4f.firebaseapp.com",
  projectId: "pomodoro-app-67f4f",
  storageBucket: "pomodoro-app-67f4f.appspot.com",
  messagingSenderId: "1092895475847",
  appId: "1:1092895475847:web:613bdfee10b53ce72cd022",
  measurementId: "G-R9HZF81C2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
