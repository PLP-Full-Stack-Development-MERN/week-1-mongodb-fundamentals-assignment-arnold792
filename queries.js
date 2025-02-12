use library;

// Retrieve all books
db.books.find().pretty();

// Query books by author
db.books.find({ author: "Robert C. Martin" }).pretty();

// Find books published after 2000
db.books.find({ publishedYear: { $gt: 2000 } }).pretty();
