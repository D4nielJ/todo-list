import todoList from "../utils/todoList";

export default function completion() {
  const checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));
  checkboxes.forEach((box) => {
    box.addEventListener('click', () => {
      todoList.completeTask(checkboxes.indexOf(box));
      console.log(todoList.arr);
    })
  })
}