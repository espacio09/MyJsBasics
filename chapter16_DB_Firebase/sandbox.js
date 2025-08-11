const list = document.getElementsByTagName('ul')[0];

function addRecipe(recipe) {
  let html = `
  <li>
    <div>${recipe.title}</div>
    </li>
  `;

  list.innerHTML += html;
}



/* //   Add the recipe to the database
  
addEventListener('submit', async (e) => {
  e.preventDefault();
  const recipe = e.target.recipe.value;
  try {
    await addDoc(recipesCol, { title: recipe });
    console.log('Recipe added');
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
    */
