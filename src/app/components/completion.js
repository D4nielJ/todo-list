import todoList from '../utils/todoList.js';

class Completion {
  addEvents = () => {
    const checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));
    checkboxes.forEach((box) => {
      box.addEventListener('change', () => {
        todoList.completeTask(checkboxes.indexOf(box));
      });
    });
  }
}

const completion = new Completion();
export { completion as default };
