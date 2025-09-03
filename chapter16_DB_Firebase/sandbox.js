  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import { collection} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  import {query, orderBy, doc, where, onSnapshot, addDoc, getDocs, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



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

    let unsubscribe; // Declare unsubscribe in a scope that persists

// === Attach Listener ===
function attachListener() {
    unsubscribe = listenForRecipes(displayRecipes);
    console.log("Listener attached");
}


    
// === Real-time Listener ===
function listenForRecipes(callback) {
    console.log("listenForRecipes called");
    const q = query(collection(db, 'recipes'), orderBy("created_at", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {  // Added unsubscribe
        console.log("Snapshot received:", querySnapshot);

        try {
            const recipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            callback(recipes);
        } catch (callbackError) {
            console.error("Error in callback:", callbackError);
        }

    }, (error) => {
        console.error("Error listening for recipes:", error);
    });

    return unsubscribe;  // VERY IMPORTANT: Return the unsubscribe function
}
    
 // === Real-time Listener ===
    listenForRecipes(displayRecipes);


    
// === Form Submission ===
    (document.getElementById('form')).addEventListener('submit', async (e) => { 
        console.log("Check1:");
        e.preventDefault();
        const recipeTitle = (document.getElementById('form')).recipe.value.trim();
        (document.getElementById('errorContainer')).textContent = "";

        if (!recipeTitle) {
            (document.getElementById('errorContainer')).textContent = "Recipe title cannot be empty.";
            return;
        }

        try {
            await runTransaction(db, async (transaction) => {
            const recipesRef = collection(db, 'recipes'); // Or your specific collection
             const query = query(recipesRef, where("title", "==", recipeTitle)); // Query for existing titles
             const querySnapshot = await getDocs(query);

             console.log("Transaction querySnapshot:", querySnapshot);

         if (!querySnapshot.empty) {
        throw new Error("A recipe with this title already exists."); // Throw error to abort the transaction
      }
            });

            showLoadingIndicator();
            console.log("Submitting recipe:", recipeTitle);
            await addRecipe(recipeTitle);
        } catch (error) {
            console.error("Form Submission Error:", error); // Catch errors in the handler
            (document.getElementById('errorContainer')).textContent = error.message;
        }
    finally {
        setTimeout(hideLoadingIndicator, 200); // Wait 200ms
       try {
        hideLoadingIndicator();
       } catch (hideError) {
        console.error("Error hiding loading indicator:", hideError);
      }
    };
});


// === Display Recipes ===

function displayRecipes(recipes) {
    const outputList = document.getElementById('output');
    const loadingIndicator = document.getElementById('loadingIndicator');

    if (loadingIndicator) loadingIndicator.style.display = 'block'; // Show while updating

    if (!recipes || recipes.length === 0) {
        outputList.innerHTML = "<li>No recipes yet. Add one!</li>";
    } else {
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

    if (loadingIndicator) loadingIndicator.style.display = 'none'; // Hide after update
}



// === Add Recipe ===

async function addRecipe(recipeTitle, ingeredients = []) {
    console.log("Starting addRecipe"); // Check if function is reached
    const errorContainer = document.getElementById('errorContainer');
    const recipeInput = document.getElementById('form').recipe;
    const loadingIndicator = document.getElementById('loadingIndicator'); //  Get the element

    try {
        //  Show loading before starting
        if (loadingIndicator) loadingIndicator.style.display = 'block';

        if (typeof recipeTitle !== 'string' || recipeTitle.trim() === "") {
            throw new Error("Recipe title cannot be empty.");
        }

        if (recipeTitle.length < 3) {
            throw new Error("Recipe title must be at least 3 characters long.");
        }

         if (await checkForExistingRecipe(recipeTitle)) {  // Correct usage
            throw new Error("A recipe with this title already exists.");

         }

          const newRecipe = {
            title: recipeTitle.toLowerCase(),
            created_at: serverTimestamp(),
            ingeredients: ingeredients,        
        };

        console.log("newRecipe:", newRecipe); // Inspect the data being sent
        loadingIndicator(); // Show loading indicator before the asynchronous operation
        const docRef = await addDoc(collection(db, 'recipes'), newRecipe);
      
         document.getElementById("output").textContent = `Recipe added with ID: ${docRef.id}`;


        console.log("docRef:", docRef); // Check if docRef is valid

        recipeInput.value = '';
        return docRef.id; // Return the document ID
        

    } catch (error) {
        console.error("addRecipe Error:", error); // Detailed error logging
        if (errorContainer) {
            errorContainer.textContent = error.message;
        } else {
            alert("Oops! There was a problem adding the recipe:\n" + error.message);
        }
        console.error("Error adding recipe:", error);
        throw error; 
    } finally {
        //  Hide loading after operation completes
        if (loadingIndicator) loadingIndicator.style.display = 'none';
    }




// === View Recipe Details ===
async function viewRecipeDetails(recipeId) {
    try {
        const docRef = doc(db, 'recipes', recipeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const recipe = docSnap.data();
            const time = recipe.created_at?.toDate().toLocaleString() || 'No date';

            // Example: Show in alert (replace with modal or custom UI)
            alert(`Title: ${recipe.title}\nCreated: ${time}`);
        } else {
            alert("Recipe not found.");
        }
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        alert("Failed to load recipe details.");
    }
}

//=== Check for Existing Recipe ===
async function checkForExistingRecipe(title) {
  const db = getFirestore();
  try {
    const exists = await runTransaction(db, async (transaction) => {
      const recipesRef = collection(db, 'recipes');
      const q = query(recipesRef, where("titleLower", "==", title.toLowerCase()));
      const querySnapshot = await getDocs(q);  // Now inside the transaction

      return !querySnapshot.empty; // Return the result within the transaction
    });

    return exists;  // Return the result of the transaction

  } catch (error) {
    console.error("Error checking for existing recipe:", error);
    throw error; // Propagate error
  }
}



// === Loading Indicator ===
function showLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) loadingIndicator.style.display = 'none';
}}


// === Detach Listener ===
function detachListener() { // Call this when the listener is no longer needed
    if (unsubscribe) { 
        unsubscribe();
        console.log("Listener detached");
    }
}
});

