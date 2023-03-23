import '../scss/main.scss';
import { createTodoInput } from './components/createTodo';
import { createTodoList } from './components/displayTodolist';
import { getTodosFromLS } from './helpers/localStorage';
import type { Todo } from './models/todo';

let todos: Todo[] = [];
todos = getTodosFromLS();

function runApp(): void {
  createTodoInput();
  createTodoList(todos);
}

runApp();
