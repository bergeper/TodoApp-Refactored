import type { Todo } from '../models/todo';
import { checkTodoDone } from './checkTodo';
import { removeTodo } from './removeTodo';

const todoListContainer = document.getElementById('todoListDisplay') as HTMLDivElement;

export function createTodoList(todoList: Todo[]): void {
  todoListContainer.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const listItemContainer: HTMLDivElement = document.createElement('div');
    listItemContainer.classList.add('card__task');

    const listItemTask: HTMLParagraphElement = document.createElement('p');
    listItemTask.classList.add('card__task--name');

    const listItemRemove: HTMLSpanElement = document.createElement('span');
    listItemRemove.classList.add('card__task--remove');

    const listItemChecked: HTMLInputElement = document.createElement('input');
    listItemChecked.classList.add('card__task--check');
    listItemChecked.type = 'checkbox';
    listItemChecked.checked = todoList[i].completed;

    listItemChecked.addEventListener('change', () => {
      checkTodoDone(listItemContainer, listItemChecked, todoList, i);
    });

    listItemRemove.addEventListener('click', () => {
      removeTodo(todoList, i);
    });

    if (listItemChecked.checked) {
      listItemContainer.classList.add('card__task--done');
    } else {
      listItemContainer.classList.remove('class', 'card__task--done');
    }

    listItemRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    listItemTask.innerText = todoList[i].task;

    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);
  }
}
