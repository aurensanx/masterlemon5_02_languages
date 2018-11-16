interface Book {
    title: string;
    isRead: boolean;
}

const isBookRead = (books: Book[], title: string): boolean => books.some((b) => b.title === title && b.isRead);


//TESTS

// const books = [
//     {title: "Harry Potter y la piedra filosofal", isRead: true},
//     {title: "Canción de hielo y fuego", isRead: false},
//     {title: "Devastación", isRead: true},
// ];
//
// console.log(isBookRead(books, "Devastación"));
// console.log(isBookRead(books, "Canción de hielo y fuego"));
// console.log(isBookRead(books, "Los pilares de la tierra"));