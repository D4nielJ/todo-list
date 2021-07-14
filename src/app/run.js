import appendTask from './components/appendTask.js';
import grabberEvents from './components/grabberEvents.js';

export default function run(ul, todoList) {
  for (let i = 0; i < todoList.arr.length; i += 1) {
    const li = appendTask(i, todoList);
    ul.appendChild(li);
  }
  grabberEvents();
}
