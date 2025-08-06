const recipesCol = collection(db, 'recipes');
getDocs(recipesCol).then((snapshot) => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
}).catch((error) => {
  console.error('Error fetching recipes:', error);
});
    // when we have the data of the async function 

   