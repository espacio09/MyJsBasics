  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { addDoc, getDoc, serverTimestamp, onSnapshot, query, where, orderBy  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


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


// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const outputList = document.getElementById('output');
    const errorContainer = document.getElementById('recipe-error'); // Get error container once
    const recipeInput = form.recipe; // Get the recipe input field once


    // Function to display recipes (using async/await)
    async function displayRecipes() {
        try {
            outputList.innerHTML = ''; // Clear the list efficiently

            const q = query(collection(db, 'recipes'), orderBy("created_at", "desc"));
            const querySnapshot = await getDocs(q); // Use getDocs for one-time fetch

            if (querySnapshot.empty) {
                outputList.innerHTML = "<li>No recipes yet. Add one!</li>";
                return;
            }

            querySnapshot.forEach((doc) => {
                const recipe = doc.data();
                const time = recipe.created_at ? recipe.created_at.toDate().toLocaleString() : 'Date not available';
                const li = document.createElement('li');
                li.innerHTML = `<strong>${recipe.title}</strong><br><small>${time}</small>`;
                outputList.appendChild(li);
            });
        } catch (error) {
            console.error("Error fetching recipes:", error);
            outputList.innerHTML = "<li>Error loading recipes. Please try again later.</li>"; // Display user-friendly error message
        }
    }

    // Function to add a new recipe (using async/await)
    async function addRecipe(recipeTitle) {
        try {
            // Input validation:
            if (typeof recipeTitle !== 'string') {
                throw new Error("Recipe title must be a string.");
            }

            if (!recipeTitle || recipeTitle.trim() === "") {
                throw new Error("Recipe title cannot be empty.");
            }
            if (recipeTitle.length < 3) {
                throw new Error("Recipe title must be at least 3 characters long.");
            }

            const recipeExists = await checkForExistingRecipe(recipeTitle);
            if (recipeExists) {
                throw new Error("A recipe with this title already exists.");
            }

            const newRecipe = {
                title: recipeTitle,
                titleLower: recipeTitle.toLowerCase(), // Store lowercase for efficient querying
                created_at: serverTimestamp()
            };

        } catch (error) {  // Correct placement of the catch block
        console.error("Error adding recipe:", error); // Log for debugging

        if (error.message && error.message.includes("Missing or insufficient permissions")) {
            // ... more specific error message ...
        }
        if (errorContainer) {
            errorContainer.textContent = error.message; 
        } else {
            alert("Oops! There was a problem adding the recipe:\n" + error.message);
        }

            await addDoc(collection(db, 'recipes'), newRecipe);
            console.log("Recipe successfully added:", recipeTitle);
   
}
    }

    
        
 // Initial display of recipes
    displayRecipes();
        
         
       
        
    // Function to check for an existing recipe (using async/await)
    function listenForRecipes(callback) {
    const recipesRef = collection(db, 'recipes');
    const q = query(recipesRef); // You can add your 'where' clause here if needed

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const recipes = [];
        querySnapshot.forEach((doc) => {
            recipes.push({ id: doc.id, ...doc.data() });
        });
        callback(recipes); // Update your UI with the fresh recipes data
    }, (error) => {
        console.error("Error listening for recipes:", error);
        // Handle the error appropriately, perhaps showing an error message to the user.
    });

    return unsubscribe; // Return the unsubscribe function for cleanup
}



    // Form submit event listener
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const recipeTitle = recipeInput.value;
        await addRecipe(recipeTitle); // No need to call displayRecipes again; it's done within addRecipe now.
    });
})
