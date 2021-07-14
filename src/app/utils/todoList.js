import Task from './task.js';

export default class TodoList {
  constructor() {
    this.index = 0;
    this.arr = [];
  }

  addTask = (desc) => {
    const newTask = new Task(this.index, desc);
    this.arr = this.arr.concat(newTask);
    this.index += 1;
  };

  getTask = (index) => {
    const [task] = this.arr.filter((task) => task.index === index);
    return task;
  }
}
