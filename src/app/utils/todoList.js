import Task from './task.js';
class TodoList {
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

const todoList = new TodoList();
export { todoList as default };
