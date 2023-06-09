const buttons = document.querySelectorAll(".btn");
buttons.forEach(button=>{
    button.addEventListener("click", event=>{
        event.currentTarget.classList.toggle("active");
    })
})