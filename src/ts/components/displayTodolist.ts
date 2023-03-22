import type { Todo } from '../models/todo';
import { removeTodo } from './removeTodo';

const todoListContainer = document.getElementById('todoListDisplay') as HTMLDivElement;

export function createTodoList(todoList: Todo[]): void {
  todoListContainer.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('card__task');

    const listItemTask = document.createElement('p');
    listItemTask.classList.add('card__task--name');

    const listItemRemove = document.createElement('span');
    listItemRemove.classList.add('card__task--remove');

    const listItemChecked = document.createElement('input');
    listItemChecked.classList.add('card__task--check');
    listItemChecked.type = 'checkbox';
    listItemChecked.checked = todoList[i].completed;

    listItemChecked.addEventListener('change', () => {
      if (listItemChecked.checked) {
        todoList[i].completed = true;
        listItemContainer.classList.add('card__task--done');
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        listItemContainer.classList.remove('class', 'card__task--done');
      }
      localStorage.setItem('Todos', JSON.stringify(todoList));
    });

    if (listItemChecked.checked) {
      listItemContainer.classList.add('card__task--done');
    } else {
      listItemContainer.classList.remove('class', 'card__task--done');
    }

    listItemRemove.addEventListener('click', () => {
      removeTodo(todoList, i);
    });

    listItemRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    listItemTask.innerText = todoList[i].task;

    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);
  }
}
