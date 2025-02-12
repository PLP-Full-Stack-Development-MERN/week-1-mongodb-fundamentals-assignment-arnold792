use ecommerce;

// Create Unique Index on Email Field (Users)
print("\nCreating unique index on users.email:");
db.users.createIndex({ email: 1 }, { unique: true });

// Create Index on Product Name
print("\nCreating index on products.name:");
db.products.createIndex({ name: 1 });

// Create Compound Index on Orders
print("\nCreating compound index on orders (userId, productId):");
db.orders.createIndex({ userId: 1, productId: 1 });

// Show all indexes
print("\nIndexes on users collection:");
db.users.getIndexes();

print("\nIndexes on products collection:");
db.products.getIndexes();

print("\nIndexes on orders collection:");
db.orders.getIndexes();
