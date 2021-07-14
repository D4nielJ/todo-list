export default function (index, todoList) {
  const li = document.createElement('li');
  const task = todoList.getTask(index);
  li.innerHTML = `<div>
  <i class="fas fa-check"></i>
  <span>${task.desc}</span>
  </div>
  <div class="todo-list__grab grabber">
    <span class="grabber__circle"></span>
  </div>`;
  li.classList.add('todo-list__item');
  return li;
}
