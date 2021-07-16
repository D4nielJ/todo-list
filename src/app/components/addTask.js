import todoList from '../utils/todoList.js';
import deployList from './deployList.js';
import completion from './completion.js';
import reorderList from './reorderList.js';

class AddTask {
  form;

  addListener = () => {
    this.form = document.querySelector('form');
    this.form.addEventListener('submit', this.addTask);
  };

  addTask = (e) => {
    e.preventDefault();
    todoList.addTask(this.form.newtask.value);
    this.form.reset();
    deployList(todoList);
    completion.addEvents();
    reorderList.addEvents();
    reorderList.addEventsToTargets();
  };
}

const addTask = new AddTask();
export { addTask as default };
