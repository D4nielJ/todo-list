import run from './app/run.js';
import TodoList from './app/utils/todoList.js';
import './scss/main.scss';

const ul = document.querySelector('.todo-list');

const todoList = new TodoList();
todoList.addTask('Limpiar');
todoList.addTask('Comer');
todoList.addTask('Sacar el perro');

window.onload = run(ul, todoList);
