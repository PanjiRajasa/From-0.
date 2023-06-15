function clickTestButton() {
  document.querySelector('.js-button').classList.contains('js-button')
}

function gamingClickFunc() {
  const butttonElement = document.querySelector('.gaming-button');
  if (!butttonElement.classList.contains('is-toggled')) {
    butttonElement.classList.add('is-toggled')
  } else {
    butttonElement.classList.remove('is-toggled')
  }
}