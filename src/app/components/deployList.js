import appendTask from './appendTask.js';

export default function deployList(todoList) {
  const [listArr] = [todoList.arr];
  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';
  const startTarget = document.createElement('li');

  startTarget.innerHTML = '<div data-index-target="0" class="todo-list__start-target"></div>';
  startTarget.classList.add('todo-list__start');
  ul.appendChild(startTarget);


  if (listArr.length === 0) {
    const div = document.createElement('div');
    div.classList.add('todo-list__empty');
    div.innerHTML = 'Your list is empty | Add new tasks to start';
    ul.appendChild(div);
  } else {
    listArr.forEach((task, index) => {
      const li = appendTask(index, todoList);
      ul.appendChild(li);
    });
  }
}
