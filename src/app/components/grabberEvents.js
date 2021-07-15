import Targets from "./targets";

export default function grabberEvents() {
  // Query selectors and declarations

  const task = Array.from(document.querySelectorAll('.todo-list__item'));
  const targets = new Targets();
  
  // Functions
  
  const dragStart = (li) => {
    targets.targetIndex = li.getAttribute('data-index');
    li.classList.add('todo-list__item--hold');
    setTimeout(() => (li.classList.add('todo-list__item--invisible'), 1));
  };

  const dragEnd = (li) => {    
    targets.setEvents();
    li.classList.remove('todo-list__item--hold');
    li.classList.remove('todo-list__item--invisible');
    li.setAttribute('data-index', targets.targetIndex);
    reorderList();
  };  

  // Events

  task.forEach((li) => {
    li.addEventListener('dragstart', () => {
      dragStart(li);
    });
    li.addEventListener('dragend', () => {
      dragEnd(li);
    });
  });
}
