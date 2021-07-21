/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import { test } from 'jest-circus';
import addTask from '../addTask.js';

describe('Add items to the list', () => {
  it('addTask should add an item to the DOM', () => {
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
    const listTest = document.querySelectorAll('.todo-list li');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('submit', true, true);
    event.eventName = 'submit';

    // Act
    addTask.addListener();
    form.dispatchEvent(event);

    // Assert
    expect(listTest).toHaveLength(2);
  });

  test('addTask should add an item to the array', () => {});

  test('addTask should update the local Storage', () => {});
});

//   test('addListener should add an event to form', () => {
//     document.body.innerHTML = `<form action='#' class='card__form'>
//   <input
//     name='newtask'
//     id='newtask'
//     class='card__add-task'
//     type='text'
//     placeholder='Add to your list'
//     required
//   />
//   <button class='card__submit' type='submit'>
//     <i class='fas fa-plus'></i>
//   </button>
// </form>;`;
//   });
