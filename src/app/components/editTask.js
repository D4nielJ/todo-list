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
        // task.parentElement.parentElement.setAttribute('draggable', 'true');
      });
    });
  }

  // deactivateDraggable = () => {
  //   this.tasks = document.querySelectorAll('.todo-list__desc');
  //   this.tasks.forEach((task) => {
  //     task.addEventListener('focus', () => {
  //       task.parentElement.parentElement.setAttribute('draggable', 'false');
  //       console.log(task.parentElement.parentElement)
  //     });
  //   });
  // }

  editTask = (index, desc) => {
    todoList.editTask(index, desc);
  }
}

const editTask = new EditTask();
export { editTask as default };
