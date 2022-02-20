const loginForm = document.querySelector(".login-form");
const loginFormInput = document.querySelector(".login-form_name");
const loginFormBnt = document.querySelector(".login-form_bnt");
const loginFormGuide = document.querySelector(".login-form_guide");
const weather =  document.querySelector(".weather");
const time = document.querySelector(".time");
const todo = document.querySelector(".todo");
const quotes = document.querySelector(".quotes");
const greeting = document.querySelector(".greeting");

const displayNoneClass = "displaynone";

function preventEnter(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        loginFormInput.value === ""    
    }
}

loginFormInput.addEventListener("keydown", preventEnter);

function writeName() {
    if(loginFormInput.value === "") {
        loginFormBnt.classList.add(displayNoneClass);
        loginFormGuide.classList.remove(displayNoneClass);
    } else {
        loginFormBnt.classList.remove(displayNoneClass);
        loginFormGuide.classList.add(displayNoneClass);
    }
}

loginFormInput.addEventListener("input", writeName);

function GREETING(name) {
    loginForm.classList.add(displayNoneClass);
    weather.classList.remove(displayNoneClass);
    time.classList.remove(displayNoneClass);
    todo.classList.remove(displayNoneClass);
    quotes.classList.remove(displayNoneClass);
    greeting.children[1].innerText = ` ${name}`
}

function loginSubmit(event) {
    event.preventDefault();
    const userName = loginFormInput.value;
    localStorage.setItem("username", userName);
    GREETING(userName);
}

loginFormBnt.addEventListener("click",loginSubmit);

const GetUserName = localStorage.getItem("username");

if(GetUserName === null) {
    loginFormInput.addEventListener("input", writeName);
    loginFormBnt.addEventListener("click",loginSubmit);
} else { 
    GREETING(GetUserName);
}


