import '../scss/main.scss';
import { createTodoList } from './components/displayTodolist';
import { getTodosFromLS } from './helpers/localStorage';
import { Todo } from './models/todo';

let todoList: Todo[] = [];
todoList = getTodosFromLS();

// input and button
const inputTask = document.getElementById('task') as HTMLInputElement;
const buttonTask = document.getElementById('addTask') as HTMLButtonElement;
buttonTask.addEventListener('click', e => {
  e.preventDefault();
  createTodo();
});

// sort button
const buttonSort = document.getElementById('sortTask') as HTMLButtonElement;
buttonSort.addEventListener('click', sortTodos);

// Create a todo
function createTodo(): void {
  const newTodo = new Todo(inputTask.value, false);
  if (inputTask.value === '') {
    alert('You need to write something');
  } else {
    todoList.push(newTodo);
    localStorage.setItem('Todos', JSON.stringify(todoList));
    inputTask.value = '';
    createTodoList(todoList);
  }
}

// sorts based on a boolean in the property completed.
function sortTodos(): void {
  todoList.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  createTodoList(todoList);
}

// Adding objects to the list

createTodoList(todoList);
