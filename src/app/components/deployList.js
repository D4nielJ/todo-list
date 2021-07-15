import appendTask from './appendTask.js';
// import completion from './completion.js';

export default function deployList(todoList) {
  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';
  const startTarget = document.createElement('li');
  startTarget.innerHTML = '<div data-index-target="0" class="todo-list__start-target"></div>';
  startTarget.classList.add('todo-list__start');
  ul.appendChild(startTarget);
  for (let i = 0; i < todoList.arr.length; i += 1) {
    const li = appendTask(i, todoList);
    ul.appendChild(li);
  }
  // completion.addEvents();
}
