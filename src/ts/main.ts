import '../scss/main.scss';
import { createTodoInput } from './components/createTodo';
import { createTodoList } from './components/displayTodolist';
import { getTodosFromLS } from './helpers/localStorage';
import type { Todo } from './models/todo';

let todoList: Todo[] = [];
todoList = getTodosFromLS();

function runApp(): void {
  createTodoInput();
  createTodoList(todoList);
}

runApp();
