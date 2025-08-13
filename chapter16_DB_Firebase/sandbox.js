  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { addDoc, getDoc, serverTimestamp, onSnapshot, query, orderBy  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


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



  // DOMContentLoaded event listener: This ensures the DOM is fully loaded before interacting with it
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const outputList = document.getElementById('output');

    // Display recipes function (moved outside onSnapshot)
    const displayRecipes = () => {
        const q = query(collection(db, 'recipes'), orderBy("created_at", "desc"));
        onSnapshot(q, (querySnapshot) => {
            try { // Add a try-catch block
              outputList.innerHTML = ""; // Clear existing list items
              querySnapshot.forEach((doc) => {
                const recipe = doc.data();
                const time = recipe.created_at ? recipe.created_at.toDate().toLocaleString() : 'Date not available';


                // Create list item (using correct timestamp field recipe.created_at)
                const li = document.createElement('li');
                li.innerHTML = `<strong>${recipe.title}</strong><br><small>${time}</small>`; // Use time variable here
                outputList.appendChild(li);
              }); 
              
            } catch (error) {
              console.error("Error fetching recipes:", error);

              // Optionally display an error message on the page
              outputList.innerHTML = "<li>Error loading recipes</li>";
            }
        });
    };

    // Call displayRecipes initially to populate the list - outside of onSnapshot essentially
    displayRecipes();


    // Add recipe function
   const addRecipe = async (recipeTitle) => {
    if (!recipeTitle) {
        console.error('Recipe title cannot be empty.');
        return;
    }

    try {
        const q = query(collection(db, 'recipes'), where("title", "==", recipeTitle));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.error('A recipe with this title already exists.');
            alert("A recipe with this title already exists!");
            return;
        }

        const docRef = await addDoc(collection(db, 'recipes'), { // <--- await addDoc
            title: recipeTitle,
            created_at: serverTimestamp()
        });

        // Get the document (no need for .then() here)
        const doc = await getDoc(docRef); // <--- await getDoc
        console.log("Document written with ID: ", docRef.id);
        console.log("created_at:", doc.data().created_at);

        // Success message
       alert("Recipe added successfully!");


   } catch (error) {
    console.error('Error adding recipe:', error.message, error); // Log for debugging

    const errorContainer = document.getElementById('recipe-error');
    if (errorContainer) {
        errorContainer.textContent = "Error adding recipe: " + error.message;
    } else {
        alert("Error adding recipe: " + error.message); // Fallback to alert if no error container
    }
} finally {
    form.reset();
}
};
                  
    // Form submit event listener
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipeTitle = form.recipe.value;
        addRecipe(recipeTitle); //Call function after verifying the input and after form submission.
    });
    });

