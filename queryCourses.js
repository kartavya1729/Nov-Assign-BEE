const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://localhost:27017"; // Local MongoDB server
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("educationDB");
    const courses = db.collection("courses");

    // Query to find uncommon courses
    const uncommonCourses = await courses.find(
      {
        instructor: { $ne: "John Smith" },
        duration: { $lte: 10 }
      },
      {
        projection: { _id: 0, course_name: 1, duration: 1, instructor: 1 }
      }
    ).toArray();

    console.log("Uncommon Courses:", uncommonCourses);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
