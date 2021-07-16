/* eslint-disable */
import resetEvents from '../utils/resetEvents.js';
import todoList from '../utils/todoList.js';
import deployList from './deployList.js';
/* eslint-enable */

class DeleteTask {
  addListener = () => {
    const rmButton = document.querySelectorAll('.todo-list__delete');
    rmButton.forEach((button) => {
      button.addEventListener('click', () => {
        const index = parseInt(button.parentElement.getAttribute('data-index'), 10);
        this.deleteTask(index);
      });
    });
  }

  deleteTask = (index) => {
    todoList.removeTask(index);
    deployList(todoList);
    resetEvents();
  }
}

const deleteTask = new DeleteTask();
export { deleteTask as default };
