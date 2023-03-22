import { Todo } from '../models/todo';

let todosFromLS: Todo[] = [];

export function getTodosFromLS(): Todo[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/strict-boolean-expressions
  todosFromLS = JSON.parse(localStorage.getItem('Todos') ?? '[]');
  const todos: Todo[] = todosFromLS.map(todo => {
    return new Todo(todo.task, todo.completed);
  });
  return todos;
}
