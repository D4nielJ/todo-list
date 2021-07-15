import todoList from './utils/todoList.js';
import reoderList from './components/reorderList.js';
import completion from './components/completion';

export default function run() {
  todoList.init();
  reoderList();
}
