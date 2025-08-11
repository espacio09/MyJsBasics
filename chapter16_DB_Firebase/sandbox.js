const list = document.querySelector('ul');

const addRecipe = (recipe) => {
  let html = `
  <li>
  
    <div class="d-flex justify-content-between align-items-center">
      <span>${recipe.title}</span> 
      </div>
    </li>
  `;
  list.innerHTML += html;
}


 //   Add the recipe to the database
  
addEventListener('submit', async (e) => {
  e.preventDefault();
  const recipe = e.target.recipe.value;
  try {
    await addDoc(recipesCol, { title: recipe });
    console.log('Recipe added');
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
  });   