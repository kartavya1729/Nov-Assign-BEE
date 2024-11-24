const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("storeDB");
    const inventory = db.collection("inventory");

    // Query to find items where price is less than 100 or stock field is missing
    const eligibleItems = await inventory.find(
      {
        $or: [
          { price: { $lt: 100 } },
          { stock: { $exists: false } }
        ]
      },
      {
        projection: { _id: 0, name: 1, price: 1, stock: 1 }
      }
    ).toArray();

    console.log("Eligible Inventory Items:", eligibleItems);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
