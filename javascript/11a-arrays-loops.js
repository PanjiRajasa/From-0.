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

const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  return array[array.length -1];
}

console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hi','hello','good']));

function arraySwap(array) {
  const firstValue = array[0];
  const lastValue = array.length-1;

  array[0] = array[lastValue];
  array[lastValue] = firstValue;

  return array[lastValue];
}

const array1 = [1,5,7,8,9];
arraySwap(array1);
console.log(array1);

for (let i=0;i<=10;i+=2) {
  console.log(i);
};

for (let i=5;i>=0;i--) {
  console.log(i);
};

let i = 5;
while (i <=0) {
  i--;
  console.log(i);
};
console.log('............');
const number1 = [1,2,3,4,5];
const number2 = [];
for (let i=0; i < number1.length; i++) {
  const result = number2.push(number1);
  console.log(result + 2)
};

console.log('............');

function addOne(array) {
  const result = [];

  for (let i=0; i < array.length; i++) {
    result.push(array[i] + 1);
  };

  return result;
}

console.log(addOne([1,2,3]))