import run from './app/run.js';
import TodoList from './app/utils/todoList.js';
import './scss/main.scss';

const ul = document.querySelector('.todo-list');

const todoList = new TodoList();
todoList.addTask('Create an index.js');
todoList.addTask('Create classes');
todoList.addTask('Implement functionality');
todoList.addTask('Check for errors with linters');

window.onload = run(ul, todoList);
