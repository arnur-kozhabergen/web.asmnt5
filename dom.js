document.getElementById('change-text').onclick = function () {
  document.getElementById('message').textContent = 'Now I have a whole bunch of bananas';
};

document.getElementById('change-color').onclick = function () {
  document.getElementById('style-box').style.backgroundColor = '#ffe39b';
};

document.getElementById('change-size').onclick = function () {
  document.getElementById('style-box').style.fontSize = '24px';
};

document.getElementById('add-item').onclick = function () {
  let item = document.createElement('li');
  item.textContent = 'Banana';
  document.getElementById('items').appendChild(item);
};

document.getElementById('remove-item').onclick = function () {
  let last = document.getElementById('items').lastElementChild;
  if (last) {
    last.remove();
  }
};
