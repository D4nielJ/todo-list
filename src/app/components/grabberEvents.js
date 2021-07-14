export default function grabberEvents() {
  const grabber = Array.from(document.querySelectorAll('.grabber'));
  grabber.forEach((div) => {
    const li = div.parentElement;
    li.addEventListener('dragstart', () => {
      li.classList.add('todo-list__item--hold');
      setTimeout(() => (li.classList.add('todo-list__item--invisible'), 1));
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('todo-list__item--hold');
      li.classList.remove('todo-list__item--invisible');
    });
  });
}
