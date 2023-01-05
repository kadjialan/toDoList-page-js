import './styles/styles.css';

const addition = document.querySelector('.add');
const area = document.querySelector('#holder');
const items = document.querySelector('.todo');
const reset = document.querySelector('.delete');

function addItem() {
  const task = items.value;
  if (task === '') {
    alert('please input a todo');
  } else {
    const todoitem = document.createElement('div');
    todoitem.classList.add('display');
    todoitem.innerHTML += `<div class= "text"> <input type="checkbox" class="radio"> ${task}  <i class="fa-solid  icons fa-trash-can"></i> </div> `;
    area.appendChild(todoitem);

    todoitem.querySelector('.radio').addEventListener('click', () => {
      todoitem.style.textDecoration = 'line-through';
    });

    todoitem.querySelector('.icons').addEventListener('click', () => {
      todoitem.remove();
    });
  }
}

function redo() {
  window.location.reload();
}

addition.addEventListener('click', () => {
  addItem();
});

reset.addEventListener('click', () => {
  redo();
});
