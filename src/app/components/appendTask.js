export default function appendTask(index, todoList) {
  const li = document.createElement('li');
  const task = todoList.getTask(index);
  li.innerHTML = `
    <div>
      <input
        type="checkbox"
        class="todo-list__completed"
        name="${task.index}"
        id="${task.index}"
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
    `;
  li.classList.add('todo-list__item');
  li.setAttribute('draggable', 'true');
  return li;
}
