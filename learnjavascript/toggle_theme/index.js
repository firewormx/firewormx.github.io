const ToggledarMode= document.querySelector("#theme-btn");
ToggledarMode.addEventListener("click", ()=>{
   document.documentElement.classList.toggle("dark");
})