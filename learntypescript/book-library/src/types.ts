export interface Book {
    id: number;
    title: string;
    author: string;
    details: {
      genre: string;
      publishedYear: number;
      summary: string;
      coverImage: string;
    };
  }
  
  export type NewBook = Pick<Book, "title" | "author">;