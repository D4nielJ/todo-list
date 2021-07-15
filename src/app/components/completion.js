import todoList from "../utils/todoList";

export default function completion() {
  const checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));
  checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
      todoList.completeTask(checkboxes.indexOf(box));
    })
  })
}