use ecommerce;

// Total Orders Per User
print("\nTotal Orders Per User:");
db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails"
        }
    },
    { $unwind: "$userDetails" },
    {
        $group: {
            _id: "$userDetails.name",
            totalOrders: { $sum: 1 },
            totalQuantity: { $sum: "$quantity" }
        }
    }
]);

// Revenue Generated Per Product
print("\nRevenue Generated Per Product:");
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails"
        }
    },
    { $unwind: "$productDetails" },
    {
        $group: {
            _id: "$productDetails.name",
            totalRevenue: { $sum: { $multiply: ["$quantity", "$productDetails.price"] } },
            totalQuantitySold: { $sum: "$quantity" }
        }
    }
]);

// Average Order Value
print("\nAverage Order Value:");
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails"
        }
    },
    { $unwind: "$productDetails" },
    {
        $group: {
            _id: null,
            averageOrderValue: { $avg: { $multiply: ["$quantity", "$productDetails.price"] } }
        }
    }
]);
