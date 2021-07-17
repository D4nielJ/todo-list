export default function ui() {
  const submitUi = () => {
    const addInput = document.querySelector('.card__add-task');
    const submitButton = document.querySelector('.card__submit');
    addInput.addEventListener('focus', () => {
      submitButton.classList.add('card__submit--active');
    });
    addInput.addEventListener('blur', () => {
      submitButton.classList.remove('card__submit--active');
    });
  };

  const taskUi = () => {
    const tasks = Array.from(document.querySelectorAll('.todo-list__item'));
    const inputs = Array.from(document.querySelectorAll('.todo-list__desc'));
    const deleteButtons = Array.from(
      document.querySelectorAll('.todo-list__delete'),
    );
    const grabbers = Array.from(document.querySelectorAll('.todo-list__grab'));

    inputs.forEach((task, index) => {
      task.addEventListener('focus', () => {
        deleteButtons[index].classList.add('todo-list__delete--active');
        grabbers[index].classList.add('d-none');
        tasks[index].classList.add('todo-list__item--active');
        tasks[index].setAttribute('draggable', 'false');
      });

      task.addEventListener('blur', () => {
        setTimeout(() => {
          deleteButtons[index].classList.remove('todo-list__delete--active');
          grabbers[index].classList.remove('d-none');
        }, 300);
        tasks[index].classList.remove('todo-list__item--active');
        tasks[index].setAttribute('draggable', 'true');
      });
    });
  };

  const taskChecked = () => {
    const inputs = Array.from(document.querySelectorAll('.todo-list__desc'));
    const checkboxes = Array.from(document.querySelectorAll('.todo-list__completed'));
    checkboxes.forEach((box, index) => {
      box.addEventListener('change', () => {
        if (box.checked) {
          inputs[index].classList.add('todo-list__desc--done');
        } else {
          inputs[index].classList.remove('todo-list__desc--done');
        }
      });
    });
  };

  submitUi();
  taskUi();
  taskChecked();
}
