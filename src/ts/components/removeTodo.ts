import type { Todo } from '../models/todo';
import { createTodoList } from './displayTodolist';

export function removeTodo(todos: Todo[], index: number): void {
  todos.splice(index, 1);
  localStorage.setItem('Todos', JSON.stringify(todos));
  createTodoList(todos);
}
