import Task from './task.js';
import storage from '../components/localStorage/localStorage.js';

class TodoList {
  constructor() {
    this.arr = [];
  }

  evaluateIndex = (index, plus = 0) => {
    if (index < 0 || index > this.arr.length + plus) {
      return true;
    }
    return false;
  };

  reorderIndex = () => {
    let newIndex = 0;
    this.arr.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    });
  };

  addTask = (desc, completed = false) => {
    const newTask = new Task(this.arr.length, desc, completed);
    this.arr = this.arr.concat(newTask);
    storage.saveData(this.arr);
  };

  getTask = (index) => {
    if (this.evaluateIndex(index)) {
      return this.evaluateIndex(index);
    }
    const task = this.arr[index];
    return task;
  };

  removeTask = (index) => {
    if (this.evaluateIndex(index)) {
      return this.evaluateIndex(index);
    }
    const [removedTask] = this.arr.filter((task) => task.index === index);
    this.arr = this.arr.filter((task) => task.index !== index);
    this.reorderIndex();
    storage.saveData(this.arr);
    return removedTask;
  };

  addTaskAt = (task, index = 0) => {
    if (this.evaluateIndex(index, 1)) {
      return this.evaluateIndex(index, 1);
    }
    const newTask = task;
    newTask.index = index;
    this.arr.splice(index, 0, newTask);
    this.reorderIndex();
    storage.saveData(this.arr);
    return newTask;
  };

  completeTask = (index) => {
    if (this.evaluateIndex(index)) {
      return this.evaluateIndex(index);
    }
    const task = this.getTask(index);
    task.complete();
    storage.saveData(this.arr);
    return task;
  };

  editTask = (index, desc) => {
    if (this.evaluateIndex(index)) {
      return this.evaluateIndex(index);
    }
    const task = this.getTask(index);
    task.edit(desc);
    storage.saveData(this.arr);
    return task;
  };

  clearCompleted = () => {
    this.arr.forEach((task, index) => {
      if (task.completed === true) {
        this.arr = this.arr.filter((task) => task.index !== index);
      }
    });
    this.reorderIndex();
    storage.saveData(this.arr);
  };

  init = () => {
    if (storage.loadData()) {
      const arrayLoaded = storage.loadData();
      arrayLoaded.forEach((task) => {
        this.addTask(task.desc, task.completed);
      });
    }
  };
}

const todoList = new TodoList();
export { todoList as default };
