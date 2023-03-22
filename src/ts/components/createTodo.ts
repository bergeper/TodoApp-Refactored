import { getTodosFromLS } from '../helpers/localStorage';
import { Todo } from '../models/todo';
import { createTodoList } from './displayTodolist';

let todoList: Todo[] = [];
todoList = getTodosFromLS();

export function createTodoInput(): void {
  const inputTask = document.getElementById('task') as HTMLInputElement;
  const buttonTask = document.getElementById('addTask') as HTMLButtonElement;
  buttonTask.addEventListener('click', e => {
    e.preventDefault();
    createTodo(inputTask.value);
    inputTask.value = '';
  });
}

export function createTodo(inputValue: string): void {
  const newTodo = new Todo(inputValue, false);
  if (inputValue === '') {
    alert('You need to write something');
  } else {
    todoList.push(newTodo);
    localStorage.setItem('Todos', JSON.stringify(todoList));
    createTodoList(todoList);
  }
}
