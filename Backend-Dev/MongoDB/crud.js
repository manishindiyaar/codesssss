// import {MongoClient } from 'mongodb';

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbname = 'first_test';


// async function run(){
//     try{
//         await client.connect();
//         console.log('Connected successfully to MongoDB');

//         //select db

//         const db = client.db(dbname);

//         const customersupport = db.collection('customersupport');

//         //insertOne
//         await customersupport.insertOne({
//             name: "Manish",
//             age: 19,
//             city: "Mumbai",
//             date: new Date(),
//             isFulltime: true,
//             "address": {
//                 "street": "1234 Main",
//                 "city": "Mumbai",
//                 "state": "MH",
//                 "zip": "400001"
//             },
//             "hobbies": ["Reading", "Coding", "Travelling"]
//         });

//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents");
//         console.log(result);


//         //inserMany
//         await customersupport.insertMany([
//             { name: "Manny", age: 19},
//             { name: "Sanny", age:19},
//             { name: "Rahul", age: 21}

//         ])
//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents");
//         console.log(result);

//         Read (Find Data)
//         it will print evrything in the collection
//         await customersupport.find();
//         const result = await customersupport.find();
//         console.log("Found documents");
//         console.log(result);

//         // Find Specific Customer
//         const result = await customersupport.find({name: "Manny"});
//         console.log("Found documents");
//         console.log(result);


//         //3. Update

//         // updateOne

//         await customersupport.updateOne(
//             { name: "Sanny"},
//             { $set: {age: 70}}
//         );
//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents"); 
//         console.log(result);

//         //updateMany
//         await customersupport.updateMany(
//            {},
//            {
//             // $set: {age: {$concat: ["$age", " years old "]}}
//             $set: {age: 70}}
//            );
//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents"); 
//         console.log(result);



//         //4. Delete

//         //deleteOne
//         await customersupport.deleteOne({name: "Sanny"});
//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents");
//         console.log(result);
//         //Sanny deleted

//         //deleteMany
//         await customersupport.deleteMany({
//             $or: [{ name: "Rahul" }, { name: "Manny" }]
//     });
//         const result = await customersupport.find({}).toArray();
//         console.log("Found documents");
//         console.log(result);
//         //Rahul deleted
//         //Manny deleted

        
        

//     }
//     catch (error) {
//         console.error("❌ Error:", error);
//     }
//     finally {
//         await client.close();
//     }
// }

// run();

