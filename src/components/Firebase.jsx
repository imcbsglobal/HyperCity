// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC73aHEsD07qBJ1t-VCkcOYJDNyfQsV470",
  authDomain: "hypercity-2e733.firebaseapp.com",
  projectId: "hypercity-2e733",
  storageBucket: "hypercity-2e733.appspot.com",
  messagingSenderId: "1006678599972",
  appId: "1:1006678599972:web:8fa830fdb90688891cebb1",
  databaseURL: "https://hypercity-2e733-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getDatabase(app);
export default app;