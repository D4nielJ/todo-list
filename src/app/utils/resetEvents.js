/* eslint-disable */
import reorderList from '../components/reorderList.js';
import completion from '../components/completion.js';
import addTask from '../components/addTask.js';
import editTask from '../components/editTask.js';
import deleteTask from '../components/deleteTask.js';
import deleteCompleted from '../components/deleteCompleted.js';
import ui from '../ui/ui.js';
/* eslint-enable */

export default function resetEvents() {
  completion.addEvents();
  reorderList.addEvents();
  reorderList.addEventsToTargets();
  addTask.addListener();
  editTask.addListener();
  deleteTask.addListener();
  deleteCompleted.addListener();
  ui();
}