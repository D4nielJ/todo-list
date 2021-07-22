/**
 * @jest-environment jsdom
 */

 import todoList from '../../utils/todoList.js';
 import addTask from '../addTask.js';
import completion from '../completion.js';
 import editTask from '../editTask.js';

 
 jest.mock('../../utils/resetEvents.js');
 jest.mock('../addTask.js');

 describe('Update and edit tasks.', () => {
     test('Should edit task description', () => {
          // Arrange
          document.body.innerHTML = `
          <ul class="todo-list"></ul>`;
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
     })

     test('The description of the task should be correct', () => {
        expect(todoList.arr[0].desc).toBe('This is an edited test.');
      });
 })

 describe('Updating an item\'s status', () => {
     test('Should update the completed status of an item.', () => {
         //Arrange
        const checkbox = document.querySelector('.todo-list__completed');
        checkbox.setAttribute('checked', true); 
        const event = document.createEvent('HTMLEvents');
        event.initEvent('change', true, true);
        event.eventName = 'change';

         //Act
        completion.addEvents();
        checkbox.dispatchEvent(event);

         //Assert
         expect(todoList.arr[0].completed).toBe(true);
     })
 })