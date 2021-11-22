// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIxaSyASbAe-IVyFkIlshhHBay1rttEoI3FVvZc",
  authDomain: "zentube-ab396.firebaseapp.com",
  projectId: "zentube-ab396",
  storageBucket: "pitthacks-ab396.appspot.com",
  messagingSenderId: "125436588133",
  appId: "1:135635588133:web:a2fbda610f925a713759cc",
  measurementId: "G-60HXJ7QGQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
