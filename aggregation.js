use library;

// Find the total number of books per genre
db.books.aggregate([{ $group: { _id: "$genre", total: { $sum: 1 } } }]);

// Calculate the average published year
db.books.aggregate([{ $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }]);

// Identify the top-rated book
db.books.find().sort({ rating: -1 }).limit(1);
