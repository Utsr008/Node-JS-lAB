const mongoose = require("mongoose");
const user = require("./models/userModules");

async function seed() {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Connected to MongoDB");

    // Clear existing users
    await user.deleteMany({});

    // Insert test users
    await user.insertMany([
        {
            _id: 1,
            name: "Utkarsh",
            age: 21,
            course: "B.Tech",
            skills: ["Node.js", "MongoDB"],
            address: { city: "Mathura", pincode: 281001 },
            isActive: true,
            status: "active",
            verified: true
        },
        {
            _id: 2,
            name: "Ravi",
            age: 22,
            course: "MCA",
            skills: ["Python", "Django"],
            address: { city: "Agra", pincode: 282001 },
            isActive: false,
            status: "inactive",
            verified: false
        }
    ]);

    console.log("✅ Users inserted successfully!");
    await mongoose.disconnect();
}

seed().catch(console.error);
