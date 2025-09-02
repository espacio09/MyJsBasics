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



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const outputList = document.getElementById('output');
    const errorContainer = document.getElementById('errorContainer');
    const recipeInput = form.recipe;
    const addRecipeButton = document.getElementById('addRecipeButton');
    const loadingIndicator = document.getElementById('loadingIndicator');




 // === Event Listeners ===
    if (addRecipeButton) {
        addRecipeButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("Default form submission prevented!");
        });
    } else {
        console.error("Add Recipe button not found!");
    }



form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const recipeTitle = recipeInput.value.trim();
        errorContainer.textContent = "";

        if (!recipeTitle) {
            errorContainer.textContent = "Recipe title cannot be empty.";
            return;
        }

        try {
            if (await checkForExistingRecipe(recipeTitle)) {
                throw new Error("A recipe with this title already exists.");
            }

            showLoadingIndicator();
            await addRecipe(recipeTitle);
        } catch (error) {
            console.error("Error during form submission:", error);
            errorContainer.textContent = error.message;
        } finally {
            hideLoadingIndicator();
        }
    });

    
form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const recipeTitle = recipeInput.value.trim();
        errorContainer.textContent = "";

        if (!recipeTitle) {
            errorContainer.textContent = "Recipe title cannot be empty.";
            return;
        }

        try {
            if (await checkForExistingRecipe(recipeTitle)) {
                throw new Error("A recipe with this title already exists.");
            }

            showLoadingIndicator();
            await addRecipe(recipeTitle);
        } catch (error) {
            console.error("Error during form submission:", error);
            errorContainer.textContent = error.message;
        } finally {
            hideLoadingIndicator();
        }
    });


// Display recipes in the UI
async function displayRecipes(recipes) {
    const outputList = document.getElementById('output');
    if (!recipes || recipes.length === 0) {
        outputList.innerHTML = "<li>No recipes yet. Add one!</li>";
        return;
    }

    outputList.innerHTML = '';
    recipes.forEach((recipe) => {
        const time = recipe.created_at ? recipe.created_at.toDate().toLocaleString() : 'Date not available';
        const li = document.createElement('li');
        li.innerHTML = `<strong>${recipe.title}</strong><br><small>${time}</small>`;
        li.dataset.recipeId = recipe.id;

        li.addEventListener('click', () => {
            viewRecipeDetails(recipe.id);
        });

        outputList.appendChild(li);
    });
}



// Add a new recipe to Firestore
async function addRecipe(recipeTitle) {
    const errorContainer = document.getElementById('errorContainer');
    const recipeInput = document.getElementById('form').recipe;

    try {
        if (typeof recipeTitle !== 'string' || recipeTitle.trim() === "") {
            throw new Error("Recipe title cannot be empty.");
        }

        if (recipeTitle.length < 3) {
            throw new Error("Recipe title must be at least 3 characters long.");
        }

        const newRecipe = {
            title: recipeTitle,
            titleLower: recipeTitle.toLowerCase(),
            created_at: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, 'recipes'), newRecipe);
        console.log("Recipe added with ID:", docRef.id);
        recipeInput.value = '';
        return docRef.id;

    } catch (error) {
        if (errorContainer) {
            errorContainer.textContent = error.message;
        } else {
            alert("Oops! There was a problem adding the recipe:\n" + error.message);
        }
        console.error("Error adding recipe:", error);
    }
}



// Check if a recipe already exists
async function checkForExistingRecipe(title) {
    const q = query(collection(db, 'recipes'));
    const snapshot = await getDocs(q);
    return snapshot.docs.some(doc => doc.data().titleLower === title.toLowerCase());
}



// Real-time listener for recipe updates
function listenForRecipes(callback) {
    const q = query(collection(db, 'recipes'), orderBy("created_at", "desc"));
    return onSnapshot(q, (querySnapshot) => {
        const recipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(recipes);
    });
}

// Placeholder for loading indicator
function showLoadingIndicator() {
    // Implement your spinner logic here
    console.log("Loading...");
}

function hideLoadingIndicator() {
    // Hide spinner logic here
    console.log("Done loading.");
}




// Placeholder for viewing recipe details
function viewRecipeDetails(recipeId) {
    // Implement your detail view logic here
    console.log("Viewing recipe:", recipeId);
}

