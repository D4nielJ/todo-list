import deployList from './components/deployList.js';
import todoList from './utils/todoList.js';

export default function run() {
  todoList.addTask('Create an index.js');
  todoList.addTask('Create classes');
  todoList.addTask('Implement functionality');
  todoList.addTask('Check for errors with linters');
  todoList.addTaskAt('Second place', 1);
  console.log(todoList.arr);
  deployList(todoList);
  // grabberEvents();
}
