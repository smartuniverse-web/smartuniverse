// Firebase Configuration (From your copy-paste)
const firebaseConfig = {
  apiKey: "AIzaSyC5zuZpkYPMzFNZpddTlv_ISKC2XacEM8Y",
  authDomain: "smart-universe.firebaseapp.com",
  databaseURL: "https://smart-universe-default-rtdb.firebaseio.com",
  projectId: "smart-universe",
  storageBucket: "smart-universe.firebasestorage.app",
  messagingSenderId: "804718866677",
  appId: "1:804718866677:web:916a896a5de6a8756415bc",
  measurementId: "G-CP2KEB7W82"
};

// Initialize Firebase (Using Compatibility Version for easier setup)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("Smart Universe Database Connected! ✅");
