import type { Todo } from '../models/todo';
import { checkTodoDone } from './checkTodo';
import { removeTodo } from './removeTodo';
import { sortTodos } from './sortTodos';

const todoContainer = document.getElementById('todoListDisplay') as HTMLDivElement;
export function createTodoList(todos: Todo[]): void {
  const buttonSort: HTMLButtonElement = document.createElement('button');
  buttonSort.classList.add('sort__btn');
  buttonSort.innerHTML = 'Sort it up!';

  todoContainer.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const taskContainer: HTMLDivElement = document.createElement('div');
    taskContainer.classList.add('card__task');

    const task: HTMLParagraphElement = document.createElement('p');
    task.classList.add('card__task--name');

    const taskRemove: HTMLSpanElement = document.createElement('span');
    taskRemove.classList.add('card__task--remove');

    const taskChecked: HTMLInputElement = document.createElement('input');
    taskChecked.classList.add('card__task--check');
    taskChecked.type = 'checkbox';
    taskChecked.checked = todos[i].completed;

    taskChecked.addEventListener('change', () => {
      checkTodoDone(taskContainer, taskChecked, todos, i);
    });

    taskRemove.addEventListener('click', () => {
      removeTodo(todos, i);
    });

    if (taskChecked.checked) {
      taskContainer.classList.add('card__task--done');
    } else {
      taskContainer.classList.remove('class', 'card__task--done');
    }

    taskRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    task.innerText = todos[i].task;

    taskContainer.appendChild(taskChecked);
    taskContainer.appendChild(task);
    taskContainer.appendChild(taskRemove);
    todoContainer.appendChild(taskContainer);
  }

  buttonSort.addEventListener('click', () => {
    sortTodos(todos);
  });

  todoContainer.appendChild(buttonSort);
}
