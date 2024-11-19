const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("educationDB");
    const courses = db.collection("courses");

    // Query to filter courses based on criteria
    const filteredCourses = await courses.find(
      {
        $or: [
          { duration: { $lt: 6 } },
          { instructor: { $exists: false } }
        ]
      },
      {
        projection: { _id: 0, course_name: 1, duration: 1, instructor: 1 }
      }
    ).toArray();

    console.log("Filtered Courses:", filteredCourses);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
