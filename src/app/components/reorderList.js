import todoList from '../utils/todoList';
import deployList from './deployList';

export default function reoderList() {
  // USE REMOVEAT AND ADDAT

  let targetsArray = [];
  let droppedOn, startIndex, taskDragged;

  const selectTargets = () => {
    const startTarget = document.querySelector('.todo-list__start-target');
    const targets = Array.from(document.querySelectorAll('.todo-list__target'));
    targetsArray = [startTarget].concat(targets);
  };

  // Functions
  const dragStart = (li) => {
    taskDragged = todoList.removeTask(parseInt(li.getAttribute('data-index'), 10));
    droppedOn = parseInt(li.getAttribute('data-index'), 10);
    startIndex = droppedOn;
    li.classList.add('todo-list__item--hold');
    setTimeout(() => (li.classList.add('todo-list__item--invisible'), 1));
    selectTargets();
    targetsArray.forEach((target) => {
      target.classList.add('z-10');
    });
    addEventsToTargets();
    li.classList.add('todo-list__item--hold');
  };

  const dragEnd = (li) => {
    if (startIndex < droppedOn) {
      droppedOn -= 1;
    }
    // todoList.addTaskAt(li.getAttribute('data-desc'), droppedOn);
    todoList.addTaskAt(taskDragged, droppedOn);
    li.classList.remove('todo-list__item--hold');
    li.classList.remove('todo-list__item--invisible');
    deployList(todoList);
    addEvents();
    addEventsToTargets();
  };

  const dragOver = (e) => {
    droppedOn = parseInt(e.currentTarget.getAttribute('data-index-target'), 10);
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
  };

  const addEventsToTargets = () => {
    selectTargets();
    targetsArray.forEach((target) => {
      target.addEventListener('dragenter', dragOver);
    });
  };
  addEvents();
}
