  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { collection} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import {query, orderBy, onSnapshot, addDoc, getDocs, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5tw8p2rAPxVtZy-v-mbozm7ZuX8hnypo",
    authDomain: "ninja-recipes-5c5b1.firebaseapp.com",
    projectId: "ninja-recipes-5c5b1",
    storageBucket: "ninja-recipes-5c5b1.firebasestorage.app",
    messagingSenderId: "473985350875",
    appId: "1:473985350875:web:6e6d611fa10d5903f560fe",
    measurementId: "G-1JW7CGS7Y9"
  };   


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);



// Test Firestore write
async function testWrite() {
  try {
    const docRef = await addDoc(collection(db, "recipes"), {
      title: "Test 2",
      created_at: serverTimestamp()
    });
    console.log("✅ Test recipe added with ID:", docRef.id);
    document.getElementById("output").textContent = `Recipe added with ID: ${docRef.id}`;
  } catch (error) {
    console.error("❌ Error writing to Firestore:", error);
    document.getElementById("output").textContent = `Error: ${error.message}`;
  }
}

testWrite();


