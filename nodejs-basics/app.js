const express = require("express");

const app = express();
// express run on the middleware system
// app.use ("use" is use for the middleware)

// here is example of api route
app.use("/", (req, res, next) =>{
    // next is use to move to the next middleware in the route of the api call when provided
    res.send("Hello word");
})
app.listen(5000, () => console.log("Connected to localhost port 5000"));