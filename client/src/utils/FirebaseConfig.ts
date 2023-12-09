import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { FireBaseConfig } from "../interfaces/interfaces";

const firebaseConfig: FireBaseConfig = {
  apiKey: "AIzaSyB9o3r1ImVysVAlOZ7VXwFE8ARfsuJEOgE",
  authDomain: "buzztalk-ef004.firebaseapp.com",
  projectId: "buzztalk-ef004",
  storageBucket: "buzztalk-ef004.appspot.com",
  messagingSenderId: "683318326499",
  appId: "1:683318326499:web:e73da0023b6845d7c301d6",
  measurementId: "G-YB7ZW2N384"
};

const app: FirebaseApp = initializeApp(firebaseConfig)
export const fireBaseAuth = getAuth(app)