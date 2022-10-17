const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const {readdirSync} = require("fs");


//middlewares
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(morgan("dev"));
app.use(cors());


//DB connection
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB Connected".red.bold))
    .catch((err) => console.log("DB Error =>".err));


// routes middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))

//server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is running successfully on port ${port}`.yellow.bold);
});
