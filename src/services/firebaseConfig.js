import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJH7V4sGwERKflXzqrPjknqfoc2PaqevM",
  authDomain: "chat-dd820.firebaseapp.com",
  databaseURL: "https://chat-dd820-default-rtdb.firebaseio.com",
  projectId: "chat-dd820",
  storageBucket: "chat-dd820.appspot.com",
  messagingSenderId: "753921118073",
  appId: "1:753921118073:web:13a0f028303920c560a9a8",
  measurementId: "G-HX4VRSZTVD"
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
