# E-Commerce MongoDB Project

## Overview

This project implements a MongoDB database for an e-commerce platform, including collections for:
- Users (customers who place orders)
- Products (items available for purchase)
- Orders (user purchases referencing products)

The project includes CRUD operations, aggregation queries, and indexing for optimization.

## Getting Started

### 1. Install MongoDB
- Ensure MongoDB is installed and running on your system
- Download: [MongoDB Official Website](https://www.mongodb.com/try/download/community)

### 2. Clone the Repository
```bash
git clone <your-repository-url>
cd ecommerce-mongodb
```

### 3. Start MongoDB Shell
```bash
mongosh
```

### 4. Run Scripts
Execute the following scripts in order:

1. Create collections and insert data:
```bash
load('scripts/insert_data.js')
```

2. Run example queries:
```bash
load('scripts/queries.js')
```

3. Perform updates and deletions:
```bash
load('scripts/update_delete.js')
```

4. Run aggregation queries:
```bash
load('scripts/aggregation.js')
```

5. Create indexes:
```bash
load('scripts/indexing.js')
```

## Database Schema

### 1. Users Collection
```json
{
    "_id": ObjectId,
    "name": "String",
    "email": "String",
    "age": Number
}
```

### 2. Products Collection
```json
{
    "_id": ObjectId,
    "name": "String",
    "price": Number,
    "stock": Number
}
```

### 3. Orders Collection
```json
{
    "_id": ObjectId,
    "userId": ObjectId,
    "productId": ObjectId,
    "quantity": Number,
    "orderDate": Date
}
```

## Key Features

### 1. CRUD Operations
- Create: Insert users, products, and orders
- Read: Query data with filters
- Update: Modify user information and product stock
- Delete: Remove products and orders

### 2. Aggregation Queries
- Calculate total orders per user
- Compute revenue generated per product
- Determine average order value

### 3. Indexing
- Unique index on user email
- Index on product name
- Compound index on orders

## Testing
Use MongoDB Compass or mongosh to verify the data:
```javascript
use ecommerce
db.users.find().pretty()
db.products.find().pretty()
db.orders.find().pretty()
