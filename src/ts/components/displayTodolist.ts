import type { Todo } from '../models/todo';
import { removeTodo } from './removeTodo';

const todoListContainer = document.getElementById('todoListDisplay') as HTMLDivElement;

export function createTodoList(todoList: Todo[]): void {
  // clear when adding new item to list
  todoListContainer.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    // create elements too display the list.
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('card__task');

    // task-name
    const listItemTask = document.createElement('p');
    listItemTask.classList.add('card__task--name');
    // task-done
    const listItemRemove = document.createElement('span');
    listItemRemove.classList.add('card__task--remove');

    // task-checked
    const listItemChecked = document.createElement('input');
    listItemChecked.classList.add('card__task--check');
    listItemChecked.type = 'checkbox';
    listItemChecked.checked = todoList[i].completed;

    // To mark object as done.
    listItemChecked.addEventListener('change', () => {
      if (listItemChecked.checked) {
        todoList[i].completed = true;
        listItemContainer.classList.add('card__task--done');
        // Just to see that the object actually go true in the list
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        listItemContainer.classList.remove('class', 'card__task--done');
        // Just to see that the object actually go false in the list
      }
      localStorage.setItem('Todos', JSON.stringify(todoList));
    });

    // Detta känns som en riktigt ful lösning
    // men det fungerar.....
    // To keep the CSS even if you reload or close the page.
    if (listItemChecked.checked) {
      listItemContainer.classList.add('card__task--done');
    } else {
      listItemContainer.classList.remove('class', 'card__task--done');
    }

    // remove item on position
    listItemRemove.addEventListener('click', () => {
      removeTodo(todoList, i);
    });

    // what each element should display.
    listItemRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    listItemTask.innerText = todoList[i].task;

    // appended all the elements in the right order.
    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);
  }

  // just to see what happends
  console.log(todoList);
}
