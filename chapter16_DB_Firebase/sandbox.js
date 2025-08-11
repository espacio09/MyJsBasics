const list = document.getElementsByTagName('ul')[0];

const addRecipe = (recipe) => {
  console.log(recipe.created_at);
  


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
