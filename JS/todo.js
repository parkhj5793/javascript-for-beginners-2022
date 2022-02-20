const todoForm = document.querySelector(".todo_todo")
const todoInput = document.querySelector(".todo_input"); 
const todoLists = document.querySelector(".todo_lists");

const KEY = "todos"

let toDos = [];

function saveTodo() {
    localStorage.setItem(KEY, JSON.stringify(toDos))
}

function deleteTodo(click) {
    const div = click.target.parentNode;
    toDos = toDos.filter((todo) => todo.id != div.id)
    saveTodo()
    div.remove();
}

function paintTodo(writeTodoId) {
    const div = document.createElement("div")
    div.id = writeTodoId.id;
    const i = document.createElement("i")
    i.innerHTML = "<i class='fa-solid fa-check'></i>"
    const span = document.createElement("span")
    span.innerText = writeTodoId.text;
    const button = document.createElement("button");
    button.innerText = "Delete";
    div.appendChild(i);
    div.appendChild(span);
    div.appendChild(button);
    todoLists.appendChild(div);
    button.addEventListener("click", deleteTodo)
}

function submitTodo(event) {
    event.preventDefault();
    const writeTodo = todoInput.value;
    todoInput.value = "";
    const writeTodoId = {
        text: writeTodo,
        id: Date.now()
    }
    toDos.push(writeTodoId);
    saveTodo()
    paintTodo(writeTodoId);
}

todoForm.addEventListener("submit", submitTodo);

const savedTodos = localStorage.getItem(KEY)

if(savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos)
    toDos = parseTodos
    parseTodos.forEach(paintTodo)
}

