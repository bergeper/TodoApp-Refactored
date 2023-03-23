import { getTodosFromLS } from '../helpers/localStorage';
import { Todo } from '../models/todo';
import { displayTodos } from './displayTodos';

let todos: Todo[] = [];
todos = getTodosFromLS();

export function createTodoInput(): void {
  const inputForTask = document.getElementById('task') as HTMLInputElement;
  const buttonForTask = document.getElementById('addTask') as HTMLButtonElement;
  buttonForTask.addEventListener('click', e => {
    e.preventDefault();
    createTodo(inputForTask.value);
    inputForTask.value = '';
  });
}

export function createTodo(inputValue: string): void {
  const newTodo = new Todo(inputValue, false);
  if (inputValue === '') {
    alert('You need to write something');
  } else {
    todos.push(newTodo);
    localStorage.setItem('Todos', JSON.stringify(todos));
    displayTodos(todos);
  }
}
