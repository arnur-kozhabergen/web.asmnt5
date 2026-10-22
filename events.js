let mouseBox = document.getElementById('mouse-box');

mouseBox.onmouseover = function () {
  mouseBox.style.backgroundColor = '#ffe39b';
};

mouseBox.onmouseout = function () {
  mouseBox.style.backgroundColor = '#eee';
};

document.getElementById('typing').onkeyup = function () {
  document.getElementById('typed-text').textContent = this.value;
};

document.getElementById('calculator').onsubmit = function (event) {
  event.preventDefault();
  let first = Number(document.getElementById('first-number').value);
  let second = Number(document.getElementById('second-number').value);
  let operation = document.getElementById('operation').value;
  let result;

  if (operation === '+') {
    result = first + second;
  } else if (operation === '-') {
    result = first - second;
  } else if (operation === '*') {
    result = first * second;
  } else if (second === 0) {
    result = 'Cannot divide by zero';
  } else {
    result = first / second;
  }

  document.getElementById('answer').textContent = 'Result: ' + result;
};
