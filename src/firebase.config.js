import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADoPtW0BzFJYwakUy7q0JrvScqhwtnlpg",
  authDomain: "restaurant-app-7726c.firebaseapp.com",
  databaseURL:
    "https://restaurant-app-7726c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-app-7726c",
  storageBucket: "restaurant-app-7726c.appspot.com",
  messagingSenderId: "613974526887",
  appId: "1:613974526887:web:147efa6fbcc69e29cfc482",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
