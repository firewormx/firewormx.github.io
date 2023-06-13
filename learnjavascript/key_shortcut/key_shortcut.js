const fab = document.querySelector("#fab");
const attendee = document.querySelector("#attendee-name");
const modal = document.querySelector("#app-modal");
const form = document.querySelector("#attendee-form");
const list = document.querySelector("#list");

export const toggleModal = () => {
    modal.classList.toggle("show");
    fab.classList.toggle("rotate");
    if (modal.classList.contains("show")) {
        attendee.focus()
    }else{
        attendee.blur();
    }
};

export const init = () => {
    fab.addEventListener("click", toggleModal);

    form.addEventListener("submit", event => {
        event.preventDefault();
        toggleModal();
        attendee.blur();
        list.insertAdjacentHTML("afterbegin", `<li tabindex="0" class="deletable">${attendee.value}</li>`);
        attendee.value = "";
    });
};