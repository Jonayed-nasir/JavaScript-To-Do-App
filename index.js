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

  createTodo(text);
  inputBox.value = '';
});


function createTodo(text) {
  let div = document.createElement('div');
div.className ='bg-white md:px-3 px-2 py-2 rounded-md mt-5 flex justify-between items-center';

const input = document.createElement('input');
input.type = 'text';
input.disabled = true;
input.value = text;
input.className = 'border-0 outline-0 md:text-2xl text-md md:w-full w-60 bg-transparent';


outputAll.appendChild(div)


}


