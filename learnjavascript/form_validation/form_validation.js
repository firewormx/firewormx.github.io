const userName= document.querySelector("#user-name");

userName.addEventListener("blur", event=>{
   if(event.currentTarget.value.length >=6){
       userName.classList.remove("error");
       userName.classList.add("success");
   }else{
       userName.classList.remove("success");
       userName.classList.add("error");
   }
})