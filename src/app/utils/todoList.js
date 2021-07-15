import Task from './task.js';
class TodoList {
  constructor() {
    this.arr = [];
  }

  addTask = (desc) => {
    const newTask = new Task(this.arr.length, desc);
    this.arr = this.arr.concat(newTask);
    this.index += 1;
  };

  getTask = (index) => {
    // const [task] = this.arr.filter((task) => task.index === index);
    const task = this.arr[index];
    return task;
  }

  removeTask = (index) => {
    if (index < 0 || index > this.arr.length) {
      console.log("invalid index");
      return;
    }
    const [removedTask] = this.arr.filter((task) => task.index === index);
    this.arr = this.arr.filter((task) => task.index !== index);
    let newIndex = 0
    this.arr.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    })
    return removedTask;
  }

  addTaskAt = (desc, index = 0) => {
    if (index < 0 || index > this.arr.length + 1) {
      console.log('invalid index');
      return;
    }
    console.log(index);
    const newTask = new Task(index, desc);
    this.arr.splice(index, 0, newTask);
    let newIndex = 0
    this.arr.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    })
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
