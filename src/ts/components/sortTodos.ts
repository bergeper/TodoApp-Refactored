import type { Todo } from '../models/todo';
import { createTodoList } from './displayTodolist';

export function sortTodos(todos: Todo[]): void {
  todos.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  createTodoList(todos);
}
