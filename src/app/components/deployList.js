import appendTask from "./appendTask";

export default function deployList(todoList) {
  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';
  const startTarget = document.createElement('li');
  startTarget.innerHTML = `<div data-index-target="0" class="todo-list__start-target"></div>`
  startTarget.classList.add('todo-list__start');
  ul.appendChild(startTarget);
  for (let i = 0; i < todoList.arr.length; i += 1) {
    const li = appendTask(i, todoList);
    ul.appendChild(li);
  }
}

//   const ul = document.querySelector('.todo-list');
//   const items = Array.from(document.querySelectorAll('.todo-list__item'));
//   const temp = [];

//   for (let i = 0; i < items.length; i += 1) {
//     for (let j = i + 1; j < items.length; j += 1) {
//       if (
//         items[i].getAttribute('data-index') >
//         items[j].getAttribute('data-index')
//       ) {
//         temp[0] = items[i];
//         items[i] = items[j];
//         items[j] = temp[0];
//       }
//     }
//   }

//   ul.innerHTML = '';
//   for (let i = 0; i < items.length; i += 1) {
//     ul.appendChild(items[i]);
//   }
// }
