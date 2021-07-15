import todoList from '../utils/todoList';
import deployList from './deployList';

export default function reoderList() {
  // USE REMOVEAT AND ADDAT

  let droppedOn = null;
  let startIndex = null;

  // Functions
  const dragStart = (li) => {
    todoList.removeTask(parseInt(li.getAttribute('data-index'), 10));
    droppedOn = parseInt(li.getAttribute('data-index'), 10);
    startIndex = droppedOn;
  };

  const dragEnd = (li) => {
    if (startIndex < droppedOn) {
      droppedOn -= 1;
    }
    todoList.addTaskAt(li.getAttribute('data-desc'), droppedOn);
    console.log(todoList.arr);
    deployList(todoList);
    addEvents();
    addEventsToTargets();
  };

  const dragOver = (e) => {
    droppedOn = parseInt(e.currentTarget.getAttribute('data-index-target'), 10);
  }

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

  const addEventsToTargets = () => {
    const startTarget = document.querySelector('.todo-list__start-target');
    const targets = Array.from(document.querySelectorAll('.todo-list__target'));
    const targetsArray = [startTarget].concat(targets);

    targetsArray.forEach((target) => {
      target.addEventListener('dragenter', dragOver);
    })
  }

  addEventsToTargets();
  addEvents();
}
