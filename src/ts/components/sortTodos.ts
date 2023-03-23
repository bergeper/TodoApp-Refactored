import type { Todo } from '../models/todo';
import { displayTodos } from './displayTodos';

export function sortTodos(todos: Todo[]): void {
  todos.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  displayTodos(todos);
}
