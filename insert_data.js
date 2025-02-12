use library;

db.books.insertMany([
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999, genre: "Programming", ISBN: "978-0201616224" },
    { title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008, genre: "Programming", ISBN: "978-0132350884" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937, genre: "Fantasy", ISBN: "978-0261102217" },
    { title: "Atomic Habits", author: "James Clear", publishedYear: 2018, genre: "Self-help", ISBN: "978-0735211292" },
    { title: "Deep Work", author: "Cal Newport", publishedYear: 2016, genre: "Self-help", ISBN: "978-1455586691" }
]);
