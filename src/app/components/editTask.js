import todoList from '../utils/todoList.js';

class EditTask {
  tasks;

  addListener = () => {
    this.tasks = document.querySelectorAll('.todo-list__desc');
    this.tasks.forEach((task) => {
      task.addEventListener('blur', () => {
        const desc = task.textContent;
        const index = parseInt(task.parentElement.parentElement.getAttribute('data-index'), 10);
        this.editTask(index, desc);
      });
    });
  }

  editTask = (index, desc) => {
    todoList.editTask(index, desc);
  }
}

const editTask = new EditTask();
export { editTask as default };
