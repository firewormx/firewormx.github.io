import type { Book } from "./types.ts";

const list = document.querySelector("#books-list")!;

export function insertBook(book: Book) {
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="book-card" data-genre="${book.details.genre}">
        <img
          src="${book.details.coverImage}"
          alt="${book.title}"
        />
        <div class="details">
          <h2>${book.title}</h2>
          <p class="author">by ${book.author}</p>
          <p class="genre">Genre: ${book.details.genre}</p>
          <p class="published-year">Published: ${book.details.publishedYear}</p>
          <p class="summary">${book.details.summary}</p>
        </div>
        <button class="hide hide-init">Hide</button> 
      </div>`
  );
  const hide = document.querySelector(".hide-init")!;
  hide.classList.remove("hide-init");
  hide.addEventListener("click", (event) => {
    (event.currentTarget as HTMLElement).closest(".book-card")?.remove();
  });
}

export function setupGenreFilter(books: Book[]) {
  const genreFilter = document.querySelector(
    "#genre-filter"
  ) as HTMLSelectElement;
  const genres = books.map((book) => book.details.genre);
  const uniqueGenres = [...new Set(genres)];
  uniqueGenres.forEach((genre) => {
    genreFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`
    );
  });
  genreFilter.addEventListener("change", (event) => {
    const selectedGenre = (event.currentTarget as HTMLSelectElement).value;
    const bookCards = document.querySelectorAll<HTMLElement>(".book-card");
    bookCards.forEach((card) => {
      const genre = card.dataset.genre;
      if (selectedGenre === "" || genre === selectedGenre) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
}