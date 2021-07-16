/* eslint-disable */
import resetEvents from '../utils/resetEvents.js';
import todoList from '../utils/todoList.js';
import deployList from './deployList.js';
/* eslint-enable */

class DeleteCompleted {
  addListener = () => {
    const clearButton = document.querySelector('.todo-list__clear');
    clearButton.addEventListener('click', this.clearCompleted);
  };

  clearCompleted = () => {
    todoList.clearCompleted();
    deployList(todoList);
    resetEvents();
  };
}

const deleteCompleted = new DeleteCompleted();
export { deleteCompleted as default };
