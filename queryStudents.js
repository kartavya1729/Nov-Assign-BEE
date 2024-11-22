const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("schoolDB");
    const students = db.collection("students");

    // Query to find students with exam_score < 50 and participation = false
    const eligibleStudents = await students.find(
      {
        exam_score: { $lt: 50 },
        participation: false
      },
      {
        projection: { _id: 0, name: 1, exam_score: 1, participation: 1 }
      }
    ).toArray();

    console.log("Eligible Students:", eligibleStudents);
  } 
  finally 
  {
    await client.close();
  }
}

run().catch(console.dir);
