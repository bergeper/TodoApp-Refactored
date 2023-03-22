import type { Todo } from '../models/todo';
import { createTodoList } from './displayTodolist';

export function sortTodos(todoList: Todo[]): void {
  todoList.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  createTodoList(todoList);
}
