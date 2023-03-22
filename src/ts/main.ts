import '../scss/main.scss';
import { createTodoInput } from './components/createTodo';
import { createTodoList } from './components/displayTodolist';
import { getTodosFromLS } from './helpers/localStorage';
import type { Todo } from './models/todo';

let todoList: Todo[] = [];
todoList = getTodosFromLS();

// sort button
const buttonSort = document.getElementById('sortTask') as HTMLButtonElement;
buttonSort.addEventListener('click', sortTodos);

// sorts based on a boolean in the property completed.
function sortTodos(): void {
  todoList.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  createTodoList(todoList);
}

// Adding objects to the list
createTodoInput();
createTodoList(todoList);
