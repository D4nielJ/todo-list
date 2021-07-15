import reorderList from './components/reorderList.js';
import todoList from './utils/todoList.js';
import deployList from './components/deployList.js';
import completion from './components/completion.js';

export default function run() {
  todoList.init();
  deployList(todoList);
  completion.addEvents();
  reorderList.addEvents();
  reorderList.addEventsToTargets();
}
