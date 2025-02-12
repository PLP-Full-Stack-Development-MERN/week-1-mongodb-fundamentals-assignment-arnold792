# MongoDB Fundamentals Assignment

## Objective
This project demonstrates MongoDB CRUD operations, indexing, and aggregation.

## Setup
### 1. Install MongoDB
- Install MongoDB from: [MongoDB Official Website](https://www.mongodb.com/try/download/community)
- Run:  
  ```bash
  mongod
  ```
- Verify:
  ```bash
  mongo --version
  ```

### 2. Connect to MongoDB Atlas (Optional)
- Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Connect using:
  ```bash
  mongosh "your_connection_string"
  ```

## CRUD Operations
### Insert Data
Run:
```bash
mongosh < insert_data.js
```

### Retrieve Data
Run:
```bash
mongosh < queries.js
```

### Update & Delete
Run:
```bash
mongosh < update_delete.js
```

### Aggregation Queries
Run:
```bash
mongosh < aggregation.js
```

## Indexing
To improve query performance, create an index:
```js
db.books.createIndex({ author: 1 })
```

## Testing
- Use **MongoDB Compass** for visualization.
- Verify records with:
  ```bash
  mongosh
  use library
  db.books.find().pretty()
  ```


