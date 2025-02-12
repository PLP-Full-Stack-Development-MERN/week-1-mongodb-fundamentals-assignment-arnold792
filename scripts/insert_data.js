use ecommerce;

// Insert Users
db.users.insertMany([
    { _id: ObjectId(), name: "Alice", email: "alice@example.com", age: 30 },
    { _id: ObjectId(), name: "Bob", email: "bob@example.com", age: 25 }
]);

// Insert Products
db.products.insertMany([
    { _id: ObjectId(), name: "Laptop", price: 1000, stock: 5 },
    { _id: ObjectId(), name: "Phone", price: 500, stock: 10 }
]);

// Insert Orders (Referencing Users and Products)
// Note: You'll need to replace these ObjectId values with actual IDs from your users and products
const users = db.users.find().toArray();
const products = db.products.find().toArray();

db.orders.insertMany([
    { 
        userId: users[0]._id, 
        productId: products[0]._id, 
        quantity: 2,
        orderDate: new Date()
    },
    {
        userId: users[1]._id,
        productId: products[1]._id,
        quantity: 1,
        orderDate: new Date()
    }
]);
