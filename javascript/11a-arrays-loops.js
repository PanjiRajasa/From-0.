let todoList = [];

renderTodoList()
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML)

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const InputElement = document.querySelector('.js-name-input');
  const name = InputElement.value;
  todoList.push(name);

  InputElement.value = '';

  renderTodoList();
}
