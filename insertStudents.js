const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("schoolDB"); // Database name
    const students = db.collection("students"); // Collection name

    // Insert sample student data
    await students.insertMany([
      { name: "Alice", exam_score: 45, participation: false },
      { name: "Bob", exam_score: 65, participation: true },
      { name: "Charlie", exam_score: 30, participation: false },
      { name: "Diana", exam_score: 85, participation: true },
      { name: "Edward", exam_score: 50, participation: false },
      { name: "Fiona", exam_score: 20, participation: false },
      { name: "George", exam_score: 70, participation: true },
      { name: "Hannah", exam_score: 45, participation: true }
    ]);

    console.log("Sample student data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
