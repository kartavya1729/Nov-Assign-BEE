const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("companyDB");
    const employees = db.collection("employees");

    // Query for Sales employees with >3 years experience OR age <25
    const salesEmployees = await employees.find(
      {
        department: "Sales",
        $or: [
          { experience: { $gt: 3 } },
          { age: { $lt: 25 } }
        ]
      },
      {
        projection: { _id: 0, name: 1, department: 1, experience: 1, age: 1 }
      }
    ).toArray();

    console.log("Sales Employees (Experience >3 or Age <25):", salesEmployees);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
