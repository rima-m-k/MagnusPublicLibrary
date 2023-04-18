const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require("dotenv");
const corsMiddleware = require('./middlewares/cors');
dotenv.config();
const PORT = process.env.PORT || 8080;

const dbconnect = require("./config/dbconfig");
dbconnect.dbconnect();

const user = require("./routes/user");
const admin = require("./routes/admin");
const assistant = require("./routes/assistant");

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
// app.use(cookieParser());

app.use(session({secret: "its a secret", resave: false, saveUninitialized: true, maxAge: 60000000}));

app.use("/", user);
app.use("/admin", admin);
app.use("/asst", assistant);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error : " + err);
    } else {
        console.log(`Listening on port ${PORT}`); 
    }
});
