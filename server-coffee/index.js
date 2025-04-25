const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//? The base url is =>  http://localhost:5000

app.get("/", (req, res) => {
    res.send("Coffee server is running.");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



// !database connection starts from herer

// const uri = "mongodb+srv://islammasayekh:<db_password>@cluster0.mnwvu.mongodb.net/?appName=Cluster0";

const uri = "mongodb://localhost:27017"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db("CoffeeDB");

        const collection = database.collection("coffees");

        //under CoffeeDB lets create another collection called users
        const usersCollection = database.collection("users");


        //! post method
        app.post("/coffee", async (req, res) => {
            const fullCoffee = req.body;
            console.log(fullCoffee);

            const inserted = await collection.insertOne(fullCoffee);
            if (inserted.acknowledged) {
                console.log(`Insered id - ${inserted.insertedId}`);
                res.send(inserted);
            } else {
                res.send(
                    {
                        message: "Error while inserting data",
                        status: false
                    }
                )
            }

        })
        //-------------------------------------------------------------------

        //!get method to show all the data from db
        app.get("/coffees", async (req, res) => {
            //find all the coffees 
            const cursor = collection.find();
            const result = await cursor.toArray();
            // console.log(result.length);
            if (result.length > 0) {
                // console.log(result);
                res.send(result);
            } else {
                console.log("No coffee found in the database.");
                res.send(
                    {
                        message: "No coffee found in the database.",
                        status: false
                    }
                )
            }
        })

        //----------------------------------------------------------------------

        //! get method to show a single coffee based on id.
        app.get("/specific-coffee/:id", async (req, res) => {
            const id = req.params.id;
            // console.log("Id to be seen = ", id);

            //query
            const query = { _id: new ObjectId(id) };

            const result = await collection.findOne(query);
            // console.log("Result : ", result);
            if (result) {
                res.send(result);
            } else {
                res.send("No result found.");
            }
        });
        // -----------------------------------------------------------------------------------------

        //!Now editing time. first we will have get method to fetch the entire data of the selected coffee
        app.get("/edit/:id", async (req, res) => {
            const selectedId = req.params.id;
            console.log("Selected Id =", selectedId);

            const coffee = { _id: new ObjectId(selectedId) };
            const result = await collection.findOne(coffee);

            // console.log("Result  = ", result);

            res.send(result);
        })

        //! Now we have used get method to retrieve the values not its time to use put method to update
        app.put("/edit/:id", async (req, res) => {

            const targetedId = req.params.id;
            const targetedValue = req.body;
            console.log("Targeted coffee to be edited = ", targetedValue);

            //depending on the id, it will update the targeted coffee
            const filter = { _id: new ObjectId(targetedId) };

            //if the coffee does not exist, it will create one
            const options = { upsert: true };

            const updateCoffee = {
                $set: {
                    name: targetedValue.name,
                    chef: targetedValue.chef,
                    supplier: targetedValue.supplier,
                    taste: targetedValue.taste,
                    category: targetedValue.category,
                    details: targetedValue.details,
                    photoUrl: targetedValue.photoUrl
                }
            }

            const result = await collection.updateOne(filter, updateCoffee, options);
            console.log(
                `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
            );
            res.send(result);
        })

        //----------------------------------------------------------------------

        //! now delete an item from the database
        app.delete("/delete/:id", async (req, res) => {
            const deletedId = req.params.id;
            console.log("Deleted Id :", deletedId);

            const query = { _id: new ObjectId(deletedId) };
            if (query) {
                const result = await collection.deleteOne(query);
                if (result.deletedCount === 1) {
                    res.send(result);
                    console.log("Deleted!!!");
                } else {
                    res.send({ message: "No document found to delete" });
                }
            }
        })

        //?---------------------------- USER ------------------------------------------

        //! post method to create users 
        app.post("/create-user", async (req, res) => {
            //grab the full body 
            const user = req.body;
            console.log("User = ", user);

            const result = await usersCollection.insertOne(user);

            res.send(result);

        })

        //----------------------------------------------------------------------

        //!get method to access all the uses
        app.get("/users", async (req, res) => {
            const cursor = usersCollection.find();
            const users = await cursor.toArray();

            if (users.length > 0) {
                res.send(users);
            } else {
                res.send(
                    {
                        message: "No user found.",
                        status: false,
                    }
                )
            }
        })

        //------------------------------------------------------------------------

        //!delete method to delete users
        app.delete("/delete-user/:id", async (req, res) => {
            const targetedId = req.params.id;
            console.log("Targeted Id ", targetedId);

            const query = { _id: new ObjectId(targetedId) };

            const result = await usersCollection.deleteOne(query);

            if (result.deletedCount === 1) {
                res.send(result)
            } else {
                res.send(
                    {
                        message: "Not found!!",
                        status: false,
                    }
                )
            }

        })

        //------------------------------------------------------------------
        //! get method to show thee edited user thn we will perform put method 
        app.get("/edit-user/:id", async (req, res) => {

            const editedId = req.params.id;
            console.log("Edited Id = ", editedId);

            const query = { _id: new ObjectId(editedId) };
            const result = await usersCollection.findOne(query);

            if (result) {
                res.send(result);
            } else {
                res.send({
                    message: "Not Found!!",
                    status: false,
                })
            }
        })

        //! now its time to use put method to edit 
        app.put("/edit-user/:id", async (req, res) => {
            const editedId = req.params.id;

            console.log("Edited ID :", editedId);

            const filter = { _id: new ObjectId(editedId) };
            const options = { upsert: true };

            const updateUser = {
                $set: {
                    name: req.body.name,
                    email: req.body.email
                }
            }

            const result = await usersCollection.updateOne(filter, updateUser, options);
            if (result) {
                res.send(result);
                console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
                );
            } else {
                res.send({
                    message: "Not Found!!",
                    status: false,
                })
            }
        })

        // //! Patch method to edit field of an existing user and it should be getting based on email
        app.patch("/user", async (req, res) => {
            const existingEmail = req?.body?.email;
            console.log("Existing Email : ", existingEmail);

            const filter = { email: existingEmail };
            const updatedDoc = {
                $set: {
                    //update the field
                    lastSignInTime: req?.body?.lastSignInTime,
                }
            }
            const result = await usersCollection.updateOne(filter, updatedDoc);
            console.log(result);
            res.send(result);
        })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

