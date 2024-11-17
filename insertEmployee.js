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
      { name: "Alice", age: 28, experience: 4, department: "HR" },
      { name: "Bob", age: 35, experience: 6, department: "Engineering" },
      { name: "Charlie", age: 40, experience: 10, department: "Finance" },
      { name: "David", age: 29, experience: 3, department: "IT" },
      { name: "Eve", age: 32, experience: 8, department: "Marketing" },
      { name: "Frank", age: 25, experience: 2, department: "Legal" },
      { name: "Grace", age: 45, experience: 12, department: "Operations" },
      { name: "Hank", age: 27, experience: 1, department: "Sales" },
      { name: "Ivy", age: 31, experience: 5, department: "Engineering" },
      { name: "Jack", age: 30, experience: 7, department: "HR" }
    ]);

    console.log("Sample employee data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
