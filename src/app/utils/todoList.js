import Task from './task.js';
import storage from '../components/localStorage/localStorage.js';
import deployList from '../components/deployList.js';
class TodoList {
  constructor() {
    this.arr = [];
  }

  addTask = (desc, completed = false) => {
    const newTask = new Task(this.arr.length, desc, completed);
    this.arr = this.arr.concat(newTask);
    this.index += 1;
    storage.saveData(this.arr);
  };

  getTask = (index) => {
    const task = this.arr[index];
    return task;
  };

  removeTask = (index) => {
    if (index < 0 || index > this.arr.length) {
      console.log('invalid index');
      return;
    }
    const [removedTask] = this.arr.filter((task) => task.index === index);
    this.arr = this.arr.filter((task) => task.index !== index);
    let newIndex = 0;
    this.arr.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    });
    storage.saveData(this.arr);
    return removedTask;
  };

  addTaskAt = (task, index = 0) => {
    if (index < 0 || index > this.arr.length + 1) {
      console.log('invalid index');
      return;
    }
    const newTask = task;
    newTask.index = index;
    this.arr.splice(index, 0, newTask);
    let newIndex = 0;
    this.arr.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    });
    storage.saveData(this.arr);
  };

  completeTask = (index) => {
    const task = this.getTask(index);
    task.complete();
    console.log(task);
    storage.saveData(this.arr);
  };

  init = () => {
    if (!storage.loadData()) {
      this.addTask('Open minimalist', true);
      this.addTask('Sort the list by dragging');
      this.addTask('Check your tasks done');
      this.addTask('Approve this PR');
    } else {
      const arrayLoaded = storage.loadData();
      arrayLoaded.forEach((task) => {
        this.addTask(task.desc, task.completed);
      })
      console.log(this.arr);
    }
    deployList(this);
  };
}

const todoList = new TodoList();
export { todoList as default };
