/**
 * @jest-environment jsdom
 */

 import todoList from '../../utils/todoList.js';
 import addTask from '../addTask.js';
 import deleteTask from '../deleteTask.js';
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
          task.textContent = 'hello-world';
          console.log(task.textContent);
          const event = document.createEvent('HTMLEvents');
          event.initEvent('blur', true, true);
          event.eventName = 'blur';

           // Act
        editTask.addListener();
        task.dispatchEvent(event);

           // Assert
        expect(task.textContent).toBe('hello-world');
     })
 })