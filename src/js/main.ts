import '../scss/main.scss';
import { Todo } from './models/todo';

let todoList: Todo[] = [];
// waiting for the whole page to load before executing

window.addEventListener('load', () => {
  // Looping the TodoList from LS to create objects with the class Todo
  // Tack för att du påminde mig om map-loopen :)
  /*
  todoList = JSON.parse(localStorage.getItem('TodoList')).map(todo => {
    return new Todo(todo.task, todo.completed);
  });
  */
  createTodoList();
});

// Getting the article tag.
const todoListContainer = document.getElementById('todoListDisplay') as HTMLDivElement;

// input and button
const inputTask = document.getElementById('task') as HTMLInputElement;
const buttonTask = document.getElementById('addTask') as HTMLButtonElement;
buttonTask.addEventListener('click', createTodo);

// sort button
const buttonSort = document.getElementById('sortTask') as HTMLButtonElement;
buttonSort.addEventListener('click', sortTodos);

// Create a todo
function createTodo(): void {
  const newTodo: Todo = new Todo(inputTask.value, false);
  if (inputTask.value === '') {
    alert('You need to write something');
  } else {
    todoList.push(newTodo);
    localStorage.setItem('TodoList', JSON.stringify(todoList));
    inputTask.value = '';
    createTodoList(newTodo);
  }
}

// sorts based on a boolean in the property completed.
function sortTodos(): void {
  todoList.sort((a, b) => (a.completed > b.completed ? 1 : -1));
  createTodoList();
}

// Adding objects to the list
function createTodoList(): void {
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
      if (listItemChecked.checked === true) {
        todoList[i].completed = true;
        listItemContainer.classList.add('card__task--done');
        // Just to see that the object actually go true in the list
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        listItemContainer.classList.remove('class', 'card__task--done');
        // Just to see that the object actually go false in the list
        console.log(todoList);
      }
      localStorage.setItem('TodoList', JSON.stringify(todoList));
    });

    // Detta känns som en riktigt ful lösning
    // men det fungerar.....
    // To keep the CSS even if you reload or close the page.
    if (listItemChecked.checked === true) {
      listItemContainer.classList.add('card__task--done');
    } else {
      listItemContainer.classList.remove('class', 'card__task--done');
    }

    // remove item on position
    listItemRemove.addEventListener('click', () => {
      todoList.splice([i], 1);
      localStorage.setItem('TodoList', JSON.stringify(todoList));
      console.log(todoList);
      createTodoList();
    });

    // what each element should display.
    listItemRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    listItemTask.innerText += todoList[i].task;

    // appended all the elements in the right order.
    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);
  }

  // just to see what happends
  console.log(todoList);
}
