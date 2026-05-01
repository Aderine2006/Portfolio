// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkt0Z1_05aeX7KgL5k9MuRvZIOt4Y8fMA",
  authDomain: "portfolio-5a7a6.firebaseapp.com",
  projectId: "portfolio-5a7a6",
  storageBucket: "portfolio-5a7a6.firebasestorage.app",
  messagingSenderId: "413880182417",
  appId: "1:413880182417:web:75eebf2a155b25d98cc130",
  measurementId: "G-34RN1KFEQ5"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export { app };
