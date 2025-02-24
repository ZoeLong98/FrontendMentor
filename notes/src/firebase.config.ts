// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOtcudgtnAj40y_MA0zICCKzk6m4paWOA",
  authDomain: "notes-fa2a4.firebaseapp.com",
  projectId: "notes-fa2a4",
  storageBucket: "notes-fa2a4.firebasestorage.app",
  messagingSenderId: "994949320594",
  appId: "1:994949320594:web:6906bcef2fb839433c7b4b",
  measurementId: "G-GLP1DEG839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// let noteid = 0;
// const notes = data.notes;
// notes.forEach(async (note) => {
//   noteid += 1;
//   await setDoc(
//     doc(
//       db,
//       "users",
//       "HNRKr3CL9GP2xLIK9VvOkAwkhB13",
//       "notes",
//       noteid.toString()
//     ),
//     note
//   );
// });

export { auth, app, db };
