import appendTask from './components/appendTask.js';

export default function (ul, todoList) {
  for (let i = 0; i < todoList.arr.length; i += 1) {
    const li = appendTask(i, todoList);
    ul.appendChild(li);
  }
}
