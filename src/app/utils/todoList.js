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
    // const [task] = this.arr.filter((task) => task.index === index);
    const task = this.arr[index];
    return task;
  }

  removeTask = (index) => {
    const [removedTask] = this.arr.filter((task) => task.index === index);
    this.arr.filter((task) => task.index !== index);
    return removedTask;
  }

  addTaskAt = (desc, index) => {
    const newTask = new Task(this.index, desc);
    this.arr.splice(index, 0, newTask);
  }
}

const todoList = new TodoList();
export { todoList as default };

 // if (index === 0) {
    //   this.arr = [task].concat(this.arr);
    // } else if (index === this.arr.length) {
    //   this.arr = this.arr.concat([task]);
    // } else {
    //   let newArr = [];
    //   for (let i = 0; i < index; i += 1) {
    //     newArr = newArr.concat(this.arr[i])
    //   }
    // }
