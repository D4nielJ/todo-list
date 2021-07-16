export default class Task {
  constructor(index = null, desc = '', completed = false) {
    this.index = index;
    this.desc = desc;
    this.completed = completed;
  }

  complete = () => {
    if (this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }

  edit = (desc) => {
    this.desc = desc;
  }
}
