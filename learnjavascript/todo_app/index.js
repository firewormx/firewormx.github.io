import Todos from "./todo_app";
import FetchWrapper from "./fetch-wrapper.js";
const form = document.querySelector("#todo-form");
const button = document.querySelector("#button-add");
const title = document.querySelector("#todo-title");
const category = document.querySelector("#todo-category");
const list = document.querySelector("#todo-list");
const filter = document.querySelector("#todo-filter");
const count = document.querySelector("#todo-count");
const API = new FetchWrapper("https://api.learnjavascript.online/demo");
const render = (items, itemsCount) => {
    count.textContent = `(${itemsCount})`;
    list.innerHTML = items.map((todo) => `<li>${todo.title} [${todo.category}]</li>`).join("");
};
const getTodos = () => {
    const data = API.get("/todos").then(data => {
        list.innerHTML = "";
        data.todos.forEach(todo => {
            console.log(todo);
            list.insertAdjacentHTML("beforeend", `<li><div class="card">${todo.title} [${todo.category}]</div></li>`);
        });
    });
};
form.addEventListener("submit", event => {
    event.preventDefault();
    button.setAttribute("disabled", "disabled");
    API.post("/todos", {
        title: title.value,
        category: category.value
    }).then(() => {
        button.removeAttribute("disabled");
        title.value = "";
        category.value = "";
        getTodos();
    }).catch(() => {
        button.removeAttribute("disabled");
        console.error("Error adding todo");
    });
});
const todos = new Todos();
try {
    render(todos.getAll(), todos.getCount());
}
catch (error) {
    console.error(error);
}
filter.addEventListener("change", () => {
    try {
        const filterValue = filter.value;
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
