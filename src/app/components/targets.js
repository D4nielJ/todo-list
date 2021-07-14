export default class Targets {
  constructor() {
    this.targetIndex = null;
    this.targets = Array.from(document.querySelectorAll('.todo-list__target'));
  }
  
  dragEnter = (e) => {
    this.targetIndex = e.currentTarget.getAttribute('data-index-target');
  };

  setEvents = () => {
    this.targets.forEach((target) => {
      target.addEventListener('dragenter', this.dragEnter);
    });
  } 
}