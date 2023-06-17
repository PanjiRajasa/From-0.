let todoList = [];
let todoList2 = [];
function addTodo() {
  const InputElement = document.querySelector('.js-name-input');
  const name = InputElement.value;
  todoList.push(name);
  console.log(todoList);

  InputElement.value = '';
}

function addTodo2() {
  const InputElement = document.querySelector('.js-name-input2');
  const name = InputElement.value;
  todoList2.push(name);
  
  document.querySelector('.js-input-message').innerHTML = todoList2;

  InputElement.value = '';
}