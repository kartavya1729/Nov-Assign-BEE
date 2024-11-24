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
      { course_name: "Math 101", duration: 8, instructor: "John Smith" },
      { course_name: "History 201", duration: 6, instructor: "Jane Doe" },
      { course_name: "Science 301", duration: 12, instructor: "Emily Clark" },
      { course_name: "Art 101", duration: 4, instructor: "John Smith" },
      { course_name: "Biology 101", duration: 10, instructor: "Michael Brown" },
      { course_name: "Physics 201", duration: 14, instructor: "David Wilson" },
      { course_name: "Chemistry 101", duration: 5, instructor: "Emma Johnson" }
    ]);

    console.log("Sample course data inserted.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
