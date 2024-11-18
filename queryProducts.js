const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("shopDB");
    const products = db.collection("products");

    // Query to find products in stock and priced below $50
    const eligibleProducts = await products.find(
      {
        stock: { $gt: 0 },
        price: { $lt: 50 }
      },
      {
        projection: { _id: 0, product_name: 1, stock: 1, price: 1 }
      }
    ).toArray();

    console.log("Eligible Products:", eligibleProducts);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
