const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const corsMiddleware = require('./middlewares/cors');

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


const user = require("./routes/user");
app.use("/user", user);
const admin = require("./routes/admin");
app.use("/admin", admin);

app.use(session({secret: "its a secret", resave: false, saveUninitialized: true, maxAge: 60000}));



dotenv.config();
const PORT = process.env.PORT || 8080;

const dbconnect = require("./config/dbconfig");
dbconnect.dbconnect();

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error : " + err);
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});
