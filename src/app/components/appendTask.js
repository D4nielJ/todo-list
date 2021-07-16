export default function appendTask(index, todoList) {
  const li = document.createElement('li');
  const task = todoList.getTask(index);
  let checked = '';
  let classDesc = '';
  if (task.completed === true) {
    checked = 'checked';
    classDesc = 'todo-list__desc--done';
  }

  li.innerHTML = `
    <div class="todo-list__desc-container">
      <input
        type="checkbox"
        class="todo-list__completed"
        ${checked}
      />
      <input
        type="text"
        value="${task.desc}"
        class="todo-list__desc ${classDesc}"
        maxlength="255"
      />
    </div>
    <div class="todo-list__grab grabber">
      <span class="grabber__circle"></span>
    </div>
    <button type="button" class="todo-list__delete fas fa-trash">
    </button>
    <div data-index-target="${task.index + 1}" class="todo-list__target"></div>
    `;
  li.classList.add('todo-list__item');
  li.setAttribute('draggable', 'true');
  li.setAttribute('data-index', `${task.index}`);
  li.setAttribute('data-desc', `${task.desc}`);
  return li;
}
