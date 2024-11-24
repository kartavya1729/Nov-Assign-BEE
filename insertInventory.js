const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("storeDB"); // Database name
    const inventory = db.collection("inventory"); // Collection name

    // Insert sample inventory data
    await inventory.insertMany([
      { name: "Item 1", price: 50, stock: 20 },
      { name: "Item 2", price: 120, stock: 15 },
      { name: "Item 3", stock: 30 },
      { name: "Item 4", price: 80, stock: 50 },
      { name: "Item 5", price: 40, stock: 10 },
      { name: "Item 6", price: 200 },
      { name: "Item 7", stock: 25 },
      { name: "Item 8", price: 75, stock: 10 }
    ]);

    console.log("Sample inventory data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
