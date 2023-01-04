import './styles/styles.css';

const addition = document.querySelector('.add');
const area = document.querySelector('#holder');
const items = document.querySelector('.todo');

function addItem() {
  const task = items.value;
  const todoitem = document.createElement('div');
  todoitem.classList.add('display');
  todoitem.innerHTML += `<div class= "text"> <input type="radio" class="radio"> ${task}  <i class="fa-solid  icons fa-trash-can"></i> </div> `;
  area.appendChild(todoitem);
}

todoitem.querySelector('.radio').addEventListener('click', () => {
  todoitem.style.textDecoration = 'line-through';
});

addition.addEventListener('click', () => {
  addItem();
});

/* minusBtn.addEventListener('click', () => {
  displayValue(sub());
}); */
