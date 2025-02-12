use library;

// Update publishedYear of a book
db.books.updateOne({ ISBN: "978-0201616224" }, { $set: { publishedYear: 2000 } });

// Add a 'rating' field with a default value
db.books.updateMany({}, { $set: { rating: 5 } });

// Delete a book by ISBN
db.books.deleteOne({ ISBN: "978-0261102217" });

// Remove all books of a specific genre
db.books.deleteMany({ genre: "Self-help" });
