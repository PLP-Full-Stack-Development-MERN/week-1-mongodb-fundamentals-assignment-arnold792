use ecommerce;

// Update User Email
print("\nUpdating Alice's email:");
db.users.updateOne(
    { name: "Alice" },
    { $set: { email: "newalice@example.com" } }
);

// Update Product Stock
print("\nUpdating Laptop stock:");
db.products.updateOne(
    { name: "Laptop" },
    { $inc: { stock: -1 } }
);

// Delete a Product
print("\nDeleting Phone product:");
db.products.deleteOne({ name: "Phone" });

// Show updated data
print("\nUpdated Users:");
db.users.find().pretty();

print("\nUpdated Products:");
db.products.find().pretty();
