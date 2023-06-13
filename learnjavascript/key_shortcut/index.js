import {init, toggleModal} from "./key_shortcut.js";

// this function adds an event listener on the + button which then opens the modal
init();

const modal = document.querySelector("#app-modal")
document.addEventListener("keyup",(event)=>{
    console.log(event.key);
    if(event.key==="n" && !modal.classList.contains("show")){
        toggleModal();
    }if(event.key==="Escape" && modal.classList.contains("show")){
      toggleModal();
    }
})