import type { Todo } from '../models/todo';
import { createTodoList } from './displayTodolist';

export function removeTodo(todoList: Todo[], index: number): void {
  todoList.splice(index, 1);
  localStorage.setItem('Todos', JSON.stringify(todoList));
  createTodoList(todoList);
}
