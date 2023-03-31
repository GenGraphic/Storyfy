// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import firebaseAPIKey from "./apiKeys";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseAPIKey,
  authDomain: "storyfy-70a92.firebaseapp.com",
  projectId: "storyfy-70a92",
  storageBucket: "storyfy-70a92.appspot.com",
  messagingSenderId: "923980587085",
  appId: "1:923980587085:web:0927ff31033fb0f8913c04",
  databaseURL: "https://storyfy-70a92-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const database = getDatabase(app);

export const auth = getAuth(app);
