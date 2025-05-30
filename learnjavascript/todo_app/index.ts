import Todos from "./todo_app.js";
import FetchWrapper from "./fetch-wrapper.js";

const form = document.querySelector("#todo-form") as HTMLFormElement;
const button = document.querySelector("#button-add") as HTMLButtonElement;
const title = document.querySelector("#todo-title") as HTMLInputElement;
const category = document.querySelector("#todo-category") as HTMLSelectElement
const list = document.querySelector("#todo-list") as HTMLUListElement
const filter = document.querySelector("#todo-filter") as HTMLSelectElement;
const count = document.querySelector("#todo-count") as HTMLSpanElement;
const API = new FetchWrapper("https://jsonplaceholder.typicode.com");

interface Todo {
    id?: number;
    title: string;
    category: string;
    created_at?: string;
}

type TodoList = Todo[];

const render = (items: TodoList, itemsCount: number): void => {
    count.textContent = `(${itemsCount})`;
    list.innerHTML = items.map((todo: Todo) => `<li>${todo.title} [${todo.category}]</li>`).join("");
}

interface Data  {
    todos: [{
id?: number,
title: string,
category: string,
created_at?: string
    }]
}
const getTodos =  () => {
    const data = API.get<Data>("/posts").then(data => {
        list.innerHTML = "";
        data.todos.forEach(todo => {
            console.log(todo);
            list.insertAdjacentHTML("beforeend",`<li><div class="card">${todo.title} [${todo.category}]</div></li>`);
        })
    })
    }

form.addEventListener("submit", event => {
    event.preventDefault();
   button.setAttribute("disabled", "disabled");
   API.post("/posts", {
        title: title.value,
        body: category.value, // JSONPlaceholder expects 'body' instead of 'category'
        userId: 1
    }).then(() => {
        button.removeAttribute("disabled");
        title.value = "";
        category.value = "";
        getTodos();
    }).catch(() => {
        button.removeAttribute("disabled");
        console.error("Error adding todo"); 
})
})


const todos = new Todos();

try {
    render(todos.getAll(), todos.getCount());
} catch (error) {
    console.error(error);
}

filter.addEventListener("change", () => {
    try {
        const filterValue: string = (filter.value as string);

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
    } catch (error) {
        console.error(error);
    }
});