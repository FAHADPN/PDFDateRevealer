import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCIwzMaVv9J8MR20RkB9nCDuM4K2DGB94",
  authDomain: "gdsc-ar.firebaseapp.com",
  projectId: "gdsc-ar",
  storageBucket: "gdsc-ar.appspot.com",
  messagingSenderId: "993183098968",
  appId: "1:993183098968:web:c9590d3818b3960e20c22d",
  measurementId: "G-02G54010BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);