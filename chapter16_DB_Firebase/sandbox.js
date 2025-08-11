

   // Add a new recipe
    const form = document.querySelector('form');
    form.

addEventListener('submit', (e) => {
    e.preventDefault();
    const recipe = e.target.recipe.value;
    console.log(recipe);
    // Add the recipe to the database
    // db.collection('recipes').add({ title: recipe })
    //   .then(() => {
    //     console.log('Recipe added');
    //   })
    //   .catch((error) => {
    //     console.error('Error adding recipe: ', error);
    //   });
  });   