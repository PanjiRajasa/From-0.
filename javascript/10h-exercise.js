function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 0) {
    document.querySelector('.js-total-cost').innerHTML = `Error: Cost cannot be less than $0`;
    document.querySelector('.js-total-cost').classList.add('error-cost-message');
    return;
  } else if (cost ===  0) {
    document.querySelector('.js-total-cost').innerHTML = `Please insert the valid cost`;
    document.querySelector('.js-total-cost').classList.add('error-cost-message');
    return;
  }
    else {
    document.querySelector('.js-total-cost').classList.remove('error-cost-message')
  }

  if (cost < 40) {
    cost = cost + 10;
  }

  cost = cost.toFixed(2)

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}