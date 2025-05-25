
import { MongoClient } from 'mongodb'; // this is es6 import


// Connection URL (default for local MongoDB)
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "first_test";

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Select the database
        const db = client.db(dbName);

        // Select the collection
        const collection = db.collection("users");


        //Insert One Syntax
        // Insert a document
        // const insertResult = await collection.insertOne({ 
        //     name: "Manish", 
        //     age: 19, 
        //     city: "Mumbai",
        //     date: new Date(),
        //     isFulltime: true,
        //     "address": {
        //         "street": "1234 Main",
        //         "city": "Mumbai",
        //         "state": "MH",
        //         "zip": "400001"
        //     },
        //     "hobbies": ["Reading", "Coding", "Travelling"]

            
        //  });
        // console.log("Inserted document:", insertResult);

        //Insert Many Syntax
        // Insert multiple documents
        // const insertResult = await collection.insertMany([
        //     { name: "Manish", age: 19 },
        //     { name: "Manjeet", age: 17 },
        //     { name: "Manish", age: 19 },
        //     { name: "Manjeet", age: 17 },
        //     { name: "Manish", age: 19 },
        //     { name: "Manjeet", age: 17 },
        //     { name: "Manish", age: 19 },
        //     { name: "Manjeet", age: 17 },
        //     { name: "Manish", age: 19 },         
        // ]);
        // console.log("Inserted documents:", insertResult);

        //Find One Syntax
        // Find a single document
        // const findresult = await collection.findOne({ name: "Manish" });
        // console.log("Found document:", findresult);  

        // //Delete One Syntax
        // // Delete a single document
        // const deleteResult = await collection.deleteOne({ name: "Manish" });
        // console.log("Deleted document:", deleteResult);

        // // Find all documents
        // const findResult = await collection.find({}).toArray();
        // //i want last item of array
        // console.log(findResult[findResult.length - 1]);

        //aggregator
        const aggResult = await collection.aggregate([
            {
                $group: {
                    _id: "$name",
                    total: { $sum: 1 }
                }
            }
        ]).toArray();                
        console.log("Aggregation result:", aggResult);
        // i want age less than 18
        const findResult1 = await collection.find({ age: { $lt: 18 } }).toArray();
        console.log(findResult1);


    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
run();