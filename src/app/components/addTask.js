/* eslint-disable */
import todoList from '../utils/todoList.js';
import deployList from './deployList.js';
import resetEvents from '../utils/resetEvents.js';
/* eslint-enable */

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
    resetEvents();
  };
}

const addTask = new AddTask();
export { addTask as default };
