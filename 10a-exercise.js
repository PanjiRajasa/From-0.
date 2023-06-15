function clickTestButton() {
  console.log(document.querySelector('.js-button').classList.contains('js-button'));
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
function toggleButton() {

  button1.addEventListener('click', function() {
    button1.classList.add('active');
    button2.classList.remove("active");
    button3.classList.remove("active");
  })

  button2.addEventListener("click", function() {
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
  });

  button3.addEventListener("click", function() {
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
  });
}
toggleButton();
