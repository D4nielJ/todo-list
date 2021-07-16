/* eslint-disable */
import todoList from '../utils/todoList.js';
import deployList from './deployList.js';
import completion from './completion.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';
import ui from '../ui/ui.js';
/* eslint-enable */

class ReorderList {
  targetsArray = [];

  droppedOn;

  startIndex;

  taskDragged;

  selectTargets = () => {
    const startTarget = document.querySelector('.todo-list__start-target');
    const targets = Array.from(document.querySelectorAll('.todo-list__target'));
    this.targetsArray = [startTarget].concat(targets);
  };

  dragStart = (li) => {
    this.droppedOn = parseInt(li.getAttribute('data-index'), 10);
    this.startIndex = this.droppedOn;
    li.classList.add('todo-list__item--hold');
    // setTimeout(() => (li.classList.add('todo-list__item--invisible')), 1);
    this.selectTargets();
    this.targetsArray.forEach((target) => {
      target.classList.add('z-10');
    });
    // addEventsToTargets();
    li.classList.add('todo-list__item--hold');
  };

  dragEnd = (li) => {
    this.taskDragged = todoList.removeTask(parseInt(li.getAttribute('data-index'), 10));
    if (this.startIndex < this.droppedOn) {
      this.droppedOn -= 1;
    }
    todoList.addTaskAt(this.taskDragged, this.droppedOn);
    li.classList.remove('todo-list__item--hold');
    // li.classList.remove('todo-list__item--invisible');
    deployList(todoList);
    completion.addEvents();
    editTask.addListener();
    deleteTask.addListener();
    this.addEvents();
    this.addEventsToTargets();
    ui();
  };

  dragOver = (e) => {
    this.droppedOn = parseInt(e.currentTarget.getAttribute('data-index-target'), 10);
  };

  addEvents = () => {
    const listItems = Array.from(document.querySelectorAll('.todo-list__item'));
    listItems.forEach((li) => {
      li.addEventListener('dragstart', () => {
        this.dragStart(li);
      });
      li.addEventListener('dragend', () => {
        this.dragEnd(li);
      });
    });
  };

  addEventsToTargets = () => {
    this.selectTargets();
    this.targetsArray.forEach((target) => {
      target.addEventListener('dragenter', this.dragOver);
    });
  };
}

const reorderList = new ReorderList();
export { reorderList as default };
