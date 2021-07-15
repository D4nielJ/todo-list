import deployList from './components/deployList.js';
import reoderList from './components/reorderList.js';
import todoList from './utils/todoList.js';

export default function run() {
  todoList.addTask('0');
  todoList.addTask('1');
  todoList.addTask('2');
  todoList.addTask('3');
  deployList(todoList);
  reoderList();
}
