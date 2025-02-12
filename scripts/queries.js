use ecommerce;

// Retrieve All Users
print("\nAll Users:");
db.users.find().pretty();

// Find Products Under $700
print("\nProducts under $700:");
db.products.find({ price: { $lt: 700 } }).pretty();

// Find Orders with User Details
print("\nOrders with User Details:");
db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails"
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails"
        }
    },
    {
        $unwind: "$userDetails"
    },
    {
        $unwind: "$productDetails"
    },
    {
        $project: {
            "userDetails.name": 1,
            "productDetails.name": 1,
            quantity: 1,
            orderDate: 1
        }
    }
]).pretty();
