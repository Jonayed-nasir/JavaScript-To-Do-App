const addBtn = document.querySelector('#addBtn');
const inputBox = document.querySelector('#inputBox');
const outputAll = document.querySelector('#outputAll');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const text = inputBox.value.trim();
  if (text === '') {
    alert('inputBox');
    return;
  }

//   createTodo(text);
  inputBox.value = '';
});

