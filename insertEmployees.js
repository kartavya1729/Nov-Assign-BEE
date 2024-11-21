const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("companyDB"); // Database name
    const employees = db.collection("employees"); // Collection name

    // Insert sample employee data
    await employees.insertMany([
      { name: "Alice", department: "HR" },
      { name: "Bob", department: "Engineering" },
      { name: "Charlie", department: "Marketing" },
      { name: "David", department: "Finance" },
      { name: "Eva", department: "IT" },
      { name: "Frank", department: "Sales" },
      { name: "Grace", department: "Legal" },
      { name: "Hank", department: "Engineering" }
    ]);

    console.log("Sample employee data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
