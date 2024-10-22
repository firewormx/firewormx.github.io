import FetchWrapper from "./FetchWrapper";
import { insertBook, setupGenreFilter } from "./helpers";
import type { Book, NewBook } from "./types";
import './index.css'

const API = new FetchWrapper(
"https://firewormx.github.io/learntypescript/book-library/src/"
);

API.get<{ books: Book[] }>("bookLibrary.json").then((data) => {
  if (data.books) {
    data.books.forEach((book) => {
      insertBook(book);
    });
    setupGenreFilter(data.books);
  }
});

const form = document.querySelector("#request-book-form")!;
const title = document.querySelector("#book-title") as HTMLInputElement;
const author = document.querySelector("#book-author") as HTMLInputElement;
const message = document.querySelector("#message")as HTMLElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBook = {
    title: title.value,
    author: author.value,
  };
  API.post<{},NewBook>("request.json", newBook).then(() => {
    message.textContent = "Thank you for suggesting a new book!";
    title.value = "";
    author.value = "";
  });
});