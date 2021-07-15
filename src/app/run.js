import reoderList from './components/reorderList.js';
import todoList from './utils/todoList.js';

export default function run() {
  todoList.init();
  reoderList();
}
