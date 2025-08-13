  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { addDoc, Timestamp, onSnapshot, query, orderBy  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


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

  


// Display recipes function
const displayRecipes = () => {

const q = query(collection(db, 'recipes'), orderBy("created_at", "desc"));
onSnapshot(q, (querySnapshot) => {
outputList.innerHTML = "";
querySnapshot.forEach((doc) => {


 const recipe = doc.data();
      const time = recipe.created_at.toDate().toLocaleString();

      const li = document.createElement('li');
      li.innerHTML = `<strong>${recipe.title}</strong><br><small>${time}</small>`;
      outputList.appendChild(li);
});
});
    // Call displayRecipes after the DOM is loaded
    displayRecipes();


// Select form and output list (move this inside the DOMContentLoaded event listener)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const outputList = document.getElementById('output');
});


// Add recipe function
const addRecipe = (recipeTitle) => {
  addDoc(collection(db, 'recipes'), {
    title: recipeTitle,
    created_at: serverTimestamp() // Use server timestamp for better accuracy
  })
  .then(() => {
    console.log('Recipe added');
    form.reset(); // Clear the form
  })
  .catch(error => {
    console.error('Error adding recipe:', error);
    // Handle error (e.g., display an error message to the user)
  });
};



// Form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

  const recipeTitle = form.recipe.value;
  if (recipeTitle) {  //check if the input is empty or not.
     addRecipe(recipeTitle);
  }
});




