import deployList from './components/reorderList.js';
import todoList from './utils/todoList.js';

export default function run() {
  todoList.addTask('Create an index.js');
  todoList.addTask('Create classes');
  todoList.addTask('Implement functionality');
  todoList.addTask('Check for errors with linters');
  deployList(todoList);
  // grabberEvents();
}
