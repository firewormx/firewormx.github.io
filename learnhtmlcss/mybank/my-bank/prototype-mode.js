document.head.insertAdjacentHTML(
    "beforeend",
    `<style>.clickable-area {
  cursor: pointer !important;
  background-color: lightblue !important;
  opacity: 0.8 !important;
  border-inline: 1px dashed black !important;
}
</style>`
);

document.documentElement.addEventListener("click", () => {
    const applyClickableArea = (item) => {
        item.classList.add("clickable-area");
        setTimeout(() => {
            item.classList.remove("clickable-area");
        }, 1000);
    };

    setTimeout(() => {
        [...document.querySelectorAll("a")]
            .filter((a) => !a.getAttribute("href").startsWith("#"))
            .forEach(applyClickableArea);
        document
            .querySelectorAll("form input[type=submit]")
            .forEach(applyClickableArea);
    }, 200);
});
