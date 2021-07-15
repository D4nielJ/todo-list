export default function appendTask(index, todoList) {
  const li = document.createElement('li');
  const task = todoList.getTask(index);
  let checked = '';
  if (task.completed === true) {
    checked = 'checked';
  }

  li.innerHTML = `
    <div>
      <input
        type="checkbox"
        class="todo-list__completed"
        ${checked}
      />
      <input
        type="text"
        value="${task.desc}"
        class="todo-list__desc"
        maxlength="255"
      />
    </div>
    <div class="todo-list__grab grabber">
      <span class="grabber__circle"></span>
    </div>
    <div data-index-target="${task.index + 1}" class="todo-list__target"></div>
    `;
  li.classList.add('todo-list__item');
  li.setAttribute('draggable', 'true');
  li.setAttribute('data-index', `${task.index}`);
  li.setAttribute('data-desc', `${task.desc}`);
  return li;
}
