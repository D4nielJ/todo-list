import todoList from './utils/todoList.js';
import deployList from './components/deployList.js';
import resetEvents from './utils/resetEvents.js';

export default function run() {
  todoList.init();
  deployList(todoList);
  resetEvents();
}
