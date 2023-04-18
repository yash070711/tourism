// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0065Jt2jCxHYUfgK-4hejmKLMkxiGltg",
  authDomain: "tourism-8d958.firebaseapp.com",
  projectId: "tourism-8d958",
  storageBucket: "tourism-8d958.appspot.com",
  messagingSenderId: "760635809132",
  appId: "1:760635809132:web:a92c01ce8cc8672deda749",
  measurementId: "G-G6H8K5GYYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;