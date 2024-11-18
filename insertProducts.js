const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("shopDB"); // Database name
    const products = db.collection("products"); // Collection name

    // Insert sample product data
    await products.insertMany([
      { product_name: "Product A", stock: 10, price: 30 },
      { product_name: "Product B", stock: 0, price: 20 },
      { product_name: "Product C", stock: 5, price: 60 },
      { product_name: "Product D", stock: 12, price: 45 },
      { product_name: "Product E", stock: 8, price: 15 },
      { product_name: "Product F", stock: 0, price: 50 },
      { product_name: "Product G", stock: 20, price: 10 },
      { product_name: "Product H", stock: 3, price: 25 }
    ]);

    console.log("Sample product data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
