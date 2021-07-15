import todoList from '../utils/todoList.js';

class Completion {
  checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));

  addEvents = () => {
    this.checkboxes.forEach((box) => {
      box.addEventListener('change', () => {
        todoList.completeTask(this.checkboxes.indexOf(box));
      });
    });
  }
}

const completion = new Completion();
export { completion as default };

// export default function completion() {
//   const checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));
//   checkboxes.forEach((box) => {
//     box.addEventListener('change', () => {
//       todoList.completeTask(checkboxes.indexOf(box));
//     });
//   });
// }