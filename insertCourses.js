const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("educationDB"); // Database name
    const courses = db.collection("courses"); // Collection name

    // Insert sample course data
    await courses.insertMany([
      { course_name: "Math 101", duration: 4, instructor: "John Doe" },
      { course_name: "History 201", duration: 8, instructor: "Jane Smith" },
      { course_name: "Science 301", duration: 5 },
      { course_name: "Art 101", duration: 3, instructor: "Emily Clark" },
      { course_name: "Biology 101", duration: 10, instructor: "Michael Brown" },
      { course_name: "Physics 201", duration: 6 },
      { course_name: "Chemistry 101", duration: 2, instructor: "David Wilson" }
    ]);

    console.log("Sample course data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
