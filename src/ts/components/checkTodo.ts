import type { Todo } from '../models/todo';

export function checkTodoDone(
  listItem: HTMLDivElement,
  checkbox: HTMLInputElement,
  todoList: Todo[],
  index: number
): void {
  if (checkbox.checked) {
    todoList[index].completed = true;
    listItem.classList.add('card__task--done');
    console.log(todoList);
  } else {
    todoList[index].completed = false;
    listItem.classList.remove('class', 'card__task--done');
    console.log(todoList);
  }
  localStorage.setItem('Todos', JSON.stringify(todoList));
}
