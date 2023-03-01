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

const filterTodos = () => {
  let filteredTodos = arrayOfTodos.filter((todo) => {
    console.log(todo);
    if (todo.userId === 2) {
      console.log(todo);
    }
  })
}
console.log(filteredTodos);

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
