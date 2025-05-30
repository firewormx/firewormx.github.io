"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_app_1 = require("./todo_app");
var fetch_wrapper_1 = require("./fetch-wrapper");
var form = document.querySelector("#todo-form");
var button = document.querySelector("#button-add");
var title = document.querySelector("#todo-title");
var category = document.querySelector("#todo-category");
var list = document.querySelector("#todo-list");
var filter = document.querySelector("#todo-filter");
var count = document.querySelector("#todo-count");
var API = new fetch_wrapper_1.default("https://api.learnjavascript.online/demo");
var render = function (items, itemsCount) {
    count.textContent = "(".concat(itemsCount, ")");
    list.innerHTML = items.map(function (todo) { return "<li>".concat(todo.title, " [").concat(todo.category, "]</li>"); }).join("");
};
var getTodos = function () {
    var data = API.get("/todos").then(function (data) {
        list.innerHTML = "";
        data.todos.forEach(function (todo) {
            console.log(todo);
            list.insertAdjacentHTML("beforeend", "<li><div class=\"card\">".concat(todo.title, " [").concat(todo.category, "]</div></li>"));
        });
    });
};
form.addEventListener("submit", function (event) {
    event.preventDefault();
    button.setAttribute("disabled", "disabled");
    API.post("/todos", {
        title: title.value,
        category: category.value
    }).then(function () {
        button.removeAttribute("disabled");
        title.value = "";
        category.value = "";
        getTodos();
    }).catch(function () {
        button.removeAttribute("disabled");
        console.error("Error adding todo");
    });
});
var todos = new todo_app_1.default();
try {
    render(todos.getAll(), todos.getCount());
}
catch (error) {
    console.error(error);
}
filter.addEventListener("change", function () {
    try {
        var filterValue = filter.value;
        switch (filterValue) {
            case "work":
                render(todos.getWork(), todos.getWorkCount());
                break;
            case "personal":
                render(todos.getPersonal(), todos.getPersonalCount());
                break;
            default:
                render(todos.getAll(), todos.getCount());
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
});