import type { Todo } from '../models/todo';

export function checkTodoDone(
  todoChecked: HTMLDivElement,
  checkbox: HTMLInputElement,
  todos: Todo[],
  index: number
): void {
  if (checkbox.checked) {
    todos[index].completed = true;
    todoChecked.classList.add('card__task--done');
    console.log(todos);
  } else {
    todos[index].completed = false;
    todoChecked.classList.remove('class', 'card__task--done');
    console.log(todos);
  }
  localStorage.setItem('Todos', JSON.stringify(todos));
}
