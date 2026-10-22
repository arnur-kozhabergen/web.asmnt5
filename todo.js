let tasks = [];
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('tasks');

document.getElementById('task-form').onsubmit = function (event) {
  event.preventDefault();
  let text = taskInput.value.trim();
  if (text === '') {
    return;
  }
  tasks.push({text: text, done: false});
  taskInput.value = '';
  showTasks();
};

function showTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tasks[i].done;
    checkbox.setAttribute('aria-label', 'Complete ' + tasks[i].text);

    let text = document.createElement('span');
    text.textContent = tasks[i].text;
    text.className = 'task-name';
    if (tasks[i].done) {
      text.classList.add('done');
    }

    checkbox.onchange = function () {
      tasks[i].done = this.checked;
      text.classList.toggle('done', this.checked);
    };

    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = function () {
      tasks.splice(i, 1);
      showTasks();
    };

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    taskList.appendChild(item);
  }
}
