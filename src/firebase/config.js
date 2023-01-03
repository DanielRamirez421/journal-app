// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYMJTKzKVM-ZDanyTo8b9pWdeqYFm29U8",
  authDomain: "react-course-1300c.firebaseapp.com",
  projectId: "react-course-1300c",
  storageBucket: "react-course-1300c.appspot.com",
  messagingSenderId: "312819890422",
  appId: "1:312819890422:web:d9d591b69f89f58f3354d7"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB   = getFirestore(firebaseApp);