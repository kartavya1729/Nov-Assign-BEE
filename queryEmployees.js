const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("companyDB");
    const employees = db.collection("employees");

    // Query to find employees not in "Engineering" or "IT"
    const nonEngEmployees = await employees.find(
      {
        department: { $nin: ["Engineering", "IT"] }
      },
      {
        projection: { _id: 0, name: 1, department: 1 }
      }
    ).toArray();

    console.log("Non-Engineering Employees:", nonEngEmployees);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
