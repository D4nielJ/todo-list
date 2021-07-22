/**
 * @jest-environment jsdom
 */


import todoList from '../../utils/todoList.js';
import addTask from '../addTask.js';
import deleteTask from '../deleteTask.js';
jest.mock('../../utils/resetEvents.js');

describe('Add items to the list', () => {
  test('addTask should add an item to the DOM', () => {
    // Arrange
    document.body.innerHTML = `<form action='#' class='card__form'>
    <input
        name='newtask'
        id='newtask'
        class='card__add-task'
        type='text'
        placeholder='Add to your list'
        required
      />
      </form>
    <ul class="todo-list"></ul>`;
    const form = document.querySelector('form');
    form.newtask = document.querySelector('input');
    form.newtask.value = 'hello-world';
    const event = document.createEvent('HTMLEvents');
    event.initEvent('submit', true, true);
    event.eventName = 'submit';
    
    // Act
    addTask.addListener();
    form.dispatchEvent(event);
    
    // Assert
    const listTest = document.querySelectorAll('li');
    expect(listTest).toHaveLength(2);
  });

  test('addTask should add an item to the array', () => {
    expect(todoList.arr).toHaveLength(1);
  });

  test('The description of the task should be correct', () => {
    expect(todoList.arr[0].desc).toBe('hello-world');
  });
});

describe('Remove items from the list', () => {
  test('Item should be removed from the array', () => {
    // Arrange
    const deleteButton = document.querySelector('.todo-list__delete');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, true);
    event.eventName = 'delete';
    // Act
    deleteTask.addListener();
    deleteButton.dispatchEvent(event);
    // Assert
    const listTest = document.querySelectorAll('li');
    expect(listTest).toHaveLength(1);
  })
  test('deleteTask should remove an item from the array', () => {
    expect(todoList.arr).toHaveLength(0);
  });
});
