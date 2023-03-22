import { Todo } from '../models/todo';

let todosFromLS: Todo[] = [];

export function getTodosFromLS(): Todo[] {
  todosFromLS = JSON.parse(localStorage.getItem('Todos') || '[]');
  const todos: Todo[] = todosFromLS.map(todo => {
    return new Todo(todo.task, todo.completed);
  });
  return todos;
}
