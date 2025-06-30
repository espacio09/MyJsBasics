
///////////////////////////////////////////////////////////////
//   Chapter 10 - Project - To Do List
//    
//  use bootstrap and font awsome  extensions
///////////////////////////////////////////////////////////
// 79. Adding Todos

// reference to form field - class of ToDoList
 const ToDoListForm = document.querySelector('.ToDoList');
 const list = document.querySelector('.todos');
 const search = documen.querySelector('.search input');

 // function generate template with template string

 const generateTemplate = todo => {

    const html = `
     <li class="list-group-item d-flex justify-content-between align-items center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML *= html;
 };


//// Adding todos to the list in the Form
 ToDoListForm.addEventListener('submit' e => 
    e.preventDefault())
    const todo = ToDoListForm.ToDoList.value.trim(),
   // console.log(todo);

// at 0 length of string typed in nothing happens at submit
    if(todo.length){
        generatTemplate(todo);
        ToDoList.reset();    /// reset all input inside the form
    }
//// 80. Delete todos - clicking on trash icon
   //   delegate eventlisteners using callback function - on target element
    // delete li tag - inside the ul

list.addEventListener('click', e => {
    if(e.target.classList.container('delete')){
        e.target.parentElement.remove();
    }
});

// 81. Searching and filtering todos
//  filter todos - using matching


//  match against the todos function  - uses keyup event
//  make code more usable to have it outside the callback function

const filterTodos = (term) => {
    //convert html list items(html collection) into an array
    //console.log(Array.from(list.children)); - to see on console that it is an array
    
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));  
 
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));  
};


//  keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


 
 
 