const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user.routes");
const app = express();

app.use(express.json()); // this will enable the application to send data as json

// here the middleware route goes
// api endpoint call for the application route
app.use("/users", router); // you can easily call this api in frontend

// you can use postman to test the api endpoint

// mongodb connection goes here...
mongoose.connect("mongodb+srv://admin:lBfak1NjXqeymEqd@cluster0.1ztb33a.mongodb.net/?retryWrites=true&w=majority")
.then(() =>app.listen(5000, () => console.log("Connected and listen on port 5000"))
).catch((err) => console.log(err));

