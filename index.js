const addBtn = document.querySelector('#addBtn');
const inputBox = document.querySelector('#inputBox');
const outputAll = document.querySelector('#outputAll');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const text = inputBox.value.trim();
  if (text === '') {
    alert('Please Enter a Value');
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


const editBtn = document.createElement('button');
editBtn.textContent = '✏️';
editBtn.className = 'text-blue-500 text-xl ml-3 cursor-pointer';

editBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    if(input.disabled) {
        input.disabled = false;
        input.focus();
        input.style.borderBottom = '2px solid black'
        editBtn.textContent = '✅';

    }else {
        input.disabled = true;
        input.style.borderBottom = 'none'
        editBtn.textContent = '✏️';
    }
})

const delBtn = document.createElement('button');
delBtn.textContent = '🗑️';
delBtn.className = 'text-red-500 text-xl ml-3 cursor-pointer';
delBtn.addEventListener('click', () => div.remove())


div.appendChild(input);
div.appendChild(editBtn);
div.appendChild(delBtn);
outputAll.appendChild(div)


}


