/**
 * @jest-environment jsdom
 */

import todoList from '../../utils/todoList.js';
import addTask from '../addTask.js';
import completion from '../completion.js';
import deleteCompleted from '../deleteCompleted.js';
import editTask from '../editTask.js';

jest.mock('../../utils/resetEvents.js');
jest.mock('../addTask.js');

describe('Update and edit tasks.', () => {
  test('Should edit task description', () => {
    // Arrange
    document.body.innerHTML = `
      <ul class="todo-list"></ul>
      <button type="button" class="todo-list__clear">Clear all completed</button>
    `;
    addTask.addTask('This is a test.');

    const task = document.querySelector('p');
    task.textContent = 'This is an edited test.';
    const event = document.createEvent('HTMLEvents');
    event.initEvent('blur', true, true);
    event.eventName = 'blur';

    // Act
    editTask.addListener();
    task.dispatchEvent(event);

    // Assert
    expect(task.textContent).toBe('This is an edited test.');
  });

  test('The description of the task should be correct', () => {
    expect(todoList.arr[0].desc).toBe('This is an edited test.');
  });
});

describe("Updating an item's status", () => {
  test('Should update the completed status of an item.', () => {
    // Arrange
    const checkbox = document.querySelector('.todo-list__completed');
    checkbox.setAttribute('checked', true);
    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, true);
    event.eventName = 'change';

    // Act
    completion.addEvents();
    checkbox.dispatchEvent(event);

    // Assert
    expect(todoList.arr[0].completed).toBe(true);
  });
});

describe('Clear all completed tasks', () => {
  test('Should delete all the completed tasks 1', () => {
    // Arrange
    const clearButton = document.querySelector('.todo-list__clear');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, true);
    event.eventName = 'click';

    // Act
    deleteCompleted.addListener();
    clearButton.dispatchEvent(event);

    // Assert
    const listTest = document.querySelectorAll('.todo-list__item');
    expect(listTest.length).toBe(0);
  });

  test('The array should have no tasks', () => {
    expect(todoList.arr.length).toBe(0);
  });

  test('Should delete all the completed tasks 2', () => {
    // Arrange
    addTask.addTask('This is a test 1', true);
    addTask.addTask('This is a test 2');
    addTask.addTask('This is a test 3', true);
    const clearButton = document.querySelector('.todo-list__clear');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, true);
    event.eventName = 'click';

    // Act
    deleteCompleted.addListener();
    clearButton.dispatchEvent(event);

    // Assert
    const listTest = document.querySelectorAll('.todo-list__item');
    expect(listTest.length).toBe(1);
  });

  test('The array should have 1 element', () => {
    expect(todoList.arr.length).toBe(1);
  });
});
