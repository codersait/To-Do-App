const searchBox = document.querySelector('.search>input')
const form = document.querySelector('form')
const todoInputBox = document.querySelector('form>input')
const ul = document.querySelector('.todos')
const btnCompleted = document.querySelector('.completed')
const clearBtn = document.querySelector('.clear');
const btnActive = document.querySelector('.active')
const btnAll = document.querySelector('.all')




// Events
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const value = form.todoInput.value.trim();
  if (value) {
    ul.innerHTML += createTodoTemplate(value)
  }
  form.reset()
})

searchBox.addEventListener('keyup', () => {
  const searchKey = searchBox.value;
  searchTodo(searchKey)
  // console.log(searchTodo(searchKey));

})
btnCompleted.addEventListener('click', () => {
  const todos = ul.querySelectorAll('li');
  todos.forEach((todo) => {
    if (!todo.children[0].children[0].checked) {
      todo.classList.add('hide')
    };
  })
})
btnActive.addEventListener('click', () => {
  const todos = ul.querySelectorAll('li');
  todos.forEach((todo) => {
    if (todo.children[0].children[0].checked) {
      todo.classList.add('hide')
    } else {
      todo.classList.remove('hide')

    }
  })
})
btnAll.addEventListener('click', () => {
  const todos = ul.querySelectorAll('li');
  todos.forEach((todo) => {
    todo.classList.remove('hide')
  })
})
clearBtn.addEventListener('click', () => {
  const todos = ul.querySelectorAll('li');
  todos.forEach((todo) => {
    todo.remove()
  })
})


// Functions
const createTodoTemplate = (value) => {
  return `
  <li class="todo">
  <div class="todo-container">
  <input type="checkbox" name="" class="check" />
  <label for="">${value}</label>
  </div>
  <img src="./icon-cross.svg" class="delete" alt="delete" />
  </li>
  `
}

const searchTodo = (key) => {
  const todos = ul.querySelectorAll('li');
  // const todoArr = [...todos]
  [...todos].forEach((todo) => {
    if (!todo.innerText.toLowerCase().includes(key.toLowerCase())) {
      todo.classList.add('hide')
    }
  });
  [...todos].forEach((todo) => {
    if (todo.innerText.toLowerCase().includes(key)) {
      todo.classList.remove('hide')
    }
  })

}



