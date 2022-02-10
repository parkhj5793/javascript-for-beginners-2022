const loginForm = document.querySelector(".login-form")
const loginFormInput = document.querySelector(".login-form_name")
const loginFormBnt = document.querySelector(".login-form_bnt")
const loginFormGuide = document.querySelector(".login-form_guide")
const weather =  document.querySelector(".weather")
const time = document.querySelector(".time")
const todo = document.querySelector(".todo")
const quotes = document.querySelector(".quotes")
const todoGreeting = document.querySelector(".todo_greeting")

const displayNoneClass = "displaynone"

function ADDclass(constName) {
    constName.classList.add(displayNoneClass);
}

function REMOVEclass(constName) {
    constName.classList.remove(displayNoneClass);
}

function writeName() {
    if(loginFormInput.value === "") {
        ADDclass(loginFormBnt);
        REMOVEclass(loginFormGuide);
    } else {
        REMOVEclass(loginFormBnt);
        ADDclass(loginFormGuide);
    }
}

loginFormInput.addEventListener("input", writeName)


function loginSubmit(event) {
    event.preventDefault();
    const userName = loginFormInput.value;
    localStorage.setItem("username", userName);
    ADDclass(loginForm);
    REMOVEclass(weather);
    REMOVEclass(time);
    REMOVEclass(todo);
    REMOVEclass(quotes);
    todoGreeting.innerText = `Good Night, ${userName}`;
}

loginFormBnt.addEventListener("click",loginSubmit)

const GetUserName = localStorage.getItem("username");

if(GetUserName === null) {
    loginFormInput.addEventListener("input", writeName)
    loginFormBnt.addEventListener("click",loginSubmit)
} else { 
    ADDclass(loginForm);
    REMOVEclass(weather);
    REMOVEclass(time);
    REMOVEclass(todo);
    REMOVEclass(quotes);
    todoGreeting.innerText = `Good Night, ${GetUserName}`;
}


