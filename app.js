const express = require("express");
const mongo = require("mongoose");
const corns = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");


const app = express();


dotenv.config();
app.use(corns());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));


const dburi = process.env.MONGODB_URI;
const port = process.env.PORT || 3300;


mongo.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => {
        app.listen(port);
        console.log(`Listening on ${port}`);
    })
    .catch((err) => console.log(err))

app.get("/", (req, res)=>{
    res.send("Node Set")
})

/*
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
*/