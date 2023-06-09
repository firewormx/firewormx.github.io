const tabs= document.querySelectorAll(".tabs .tab");
tabs.forEach(tab=>{
    tab.addEventListener("click", event=>{
        document.querySelector(".tab.active").classList.remove("active");
        event.currentTarget.classList.add("active");
    document.querySelector(".tab-content.show").classList.remove("show");
    
    const selector =event.currentTarget.dataset.content;
    document.querySelector(selector).classList.add("show");
    })
    
})