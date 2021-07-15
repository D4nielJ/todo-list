import todoList from '../utils/todoList';
import deployList from './deployList';

export default function reoderList() {
  // USE REMOVEAT AND ADDAT
  // Query selectors

  const startTarget = document.querySelector('.todo-list__start-target');
  const targets = Array.from(document.querySelectorAll('.todo-list__target'));
  const targetsArray = [startTarget].concat(targets);

  // Functions
  const dragStart = (li) => {
    console.log(li.getAttribute('data-index'));
    let draggedTask = todoList.removeTask(parseInt(li.getAttribute('data-index'), 10));
    console.log(draggedTask);
  };

  const dragEnd = (li) => {
    deployList(todoList);
    addEvents();
  };

  // Events

  const addEvents = () => {
    const listItems = Array.from(document.querySelectorAll('.todo-list__item'));
    listItems.forEach((li) => {
      li.addEventListener('dragstart', () => {
        dragStart(li);
      });
      li.addEventListener('dragend', () => {
        dragEnd(li);
      });
    });
  }
  addEvents();
}
