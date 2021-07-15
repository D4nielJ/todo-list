export default class Task {
  constructor(index = null, desc = '', completed = false) {
    this.index = index;
    this.desc = desc;
    this.completed = completed;
  }

  complete = () => {
    if (task.completed === false) {
      task.completed = true;
    } else {
      task.completed = false;
    } 
  }
}
