import FetchWrapper from "./github_repos.js";
import {startLoader, stopLoader}from "./helpers.js";

const form = document.querySelector("#repos-form");
const userName= document.querySelector("#github-username");
const button = document.querySelector("#get-repos");
const reposList = document.querySelector("#repos-list");

const API = new FetchWrapper("https://api.github.com");

form.addEventListener("submit", event=>{
    event.preventDefault();

    startLoader(button);

    API.get(`/users/${userName.value}/repos`)
    .then(data=>{
    console.log(data);
    
    reposList.innerHTML= "";
    data.forEach(repo=>{
    reposList.insertAdjacentHTML("beforeend",
    `<li><a href="${repo.html_url}" target="_blank">
    <h2>${repo.full_name}</h2>
    <p>${repo.description}</p>
    </a></li>`);
    });
}).finally(()=>{
    stopLoader(button, "Get repos");
});

})