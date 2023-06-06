import {openCloseSidebar} from "./sidebar.js";

const menuSidebar = document.querySelector("#menu-sidebar");

menuSidebar.addEventListener("click", () => {
    openCloseSidebar();
});