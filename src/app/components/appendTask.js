export default function (index, todoList) {
  const li = document.createElement('li');
  const task = todoList.getTask(index);
  li.innerHTMl = `${task.desc}`;
  return li;
};
