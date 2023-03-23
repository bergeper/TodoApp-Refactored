import '../scss/main.scss';
import { createTodoInput } from './components/createTodo';
import { displayTodos } from './components/displayTodos';
import { getTodosFromLS } from './helpers/localStorage';
import type { Todo } from './models/todo';

let todos: Todo[] = [];
todos = getTodosFromLS();

function runApp(): void {
  createTodoInput();
  displayTodos(todos);
}

runApp();
