/* eslint-disable */
import todoList from '../../utils/todoList.js';
import deployList from '../deployList.js';
/* eslint-enable */

class AddTask {
  addTask = (description, completed = false) => {
    todoList.addTask(description, completed);
    deployList(todoList);
  };
}

const addTask = new AddTask();
export { addTask as default };