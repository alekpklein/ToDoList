// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

let filteredTodos = [];

const filterTodos = () => {
  let idInput = document.querySelector('#user-id-input').value;
  document.querySelector('ol').innerHTML = null;
  filteredTodos = arrayOfTodos.filter((todo) => {
    if (todo.userId === parseInt(idInput)) {
      console.log(todo);
      return todo
    }
  })
  console.log(filteredTodos);

  const todoList = document.querySelector('#todo-list');
  for(let i = 0; i < filteredTodos.length; i++) {
    const listItem = document.createElement('li');
    let todo = filteredTodos[i]
    const newText = document.createTextNode(todo.title);
    listItem.appendChild(newText);
    todoList.appendChild(listItem);
  }
}

const removeTodos = () => {
  document.querySelector("ol").innerHTML = null;
}

let completedTodos = [];

const doneTodos = () => {
 document.querySelector("ol").innerHTML = null;
 completedTodos = arrayOfTodos.filter((todo) => {
   if (todo.completed === true) {
     console.log(todo);
     return todo;
   }
 });
 console.log(completedTodos);

 const todoList = document.querySelector("#todo-list");
 for (let i = 0; i < completedTodos.length; i++) {
   const listItem = document.createElement("li");
   let todo = completedTodos[i];
   const newText = document.createTextNode(todo.title);
   listItem.appendChild(newText);
   todoList.appendChild(listItem);
 }
}

const populateTodos = () => {
  const todoList = document.querySelector('#todo-list');
  for(let i = 0; i < arrayOfTodos.length; i++) {
    const listItem = document.createElement('li');
    let todo = arrayOfTodos[i]
    const newText = document.createTextNode(todo.title);
    listItem.appendChild(newText);
    todoList.appendChild(listItem);
  }
};

