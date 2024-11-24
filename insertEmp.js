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
      { name: "Alice", department: "Sales", experience: 4, age: 28 },
      { name: "Bob", department: "Engineering", experience: 5, age: 30 },
      { name: "Charlie", department: "Sales", experience: 2, age: 22 },
      { name: "David", department: "Marketing", experience: 1, age: 23 },
      { name: "Eva", department: "Sales", experience: 6, age: 35 },
      { name: "Frank", department: "Finance", experience: 8, age: 40 },
      { name: "Grace", department: "Sales", experience: 3, age: 24 },
      { name: "Hank", department: "Sales", experience: 5, age: 26 }
    ]);

    console.log("Sample employee data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
