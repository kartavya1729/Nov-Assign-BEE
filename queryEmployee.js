const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("companyDB");
    const employees = db.collection("employees");

    // Query for employees who are either over 30 or have more than 5 years of experience
    const eligibleEmployees = await employees.find(
      {
        $or: [
          { age: { $gt: 30 } },
          { experience: { $gt: 5 } }
        ]
      },
      {
        projection: { _id: 0, name: 1, age: 1, experience: 1, department: 1 }
      }
    ).toArray();

    console.log("Eligible Employees:", eligibleEmployees);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
