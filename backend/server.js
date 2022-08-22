const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//config Express App
const app = express();
app.use(express.json());
app.use(cors());

//config PORT
const PORT = process.env.PORT || 5000;

//config MongoDB
// env removed for now
// const uri = process.env.MONGO_URI;
const uri = 'mongodb+srv://jp_eqaim:cioxiJj58HcXZwvJ@cluster0.aw7iloe.mongodb.net/eqaimdb?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
    console.log("MongoDB connection has been established!")
);

//config routes
const postsRouter = require("./routes/posts");

// To differentiate backend posts route, I am adding server/
app.use("/server/posts", postsRouter);

//Load the npm build package of the frontend CRA
if (process.env.NODE_ENV === "production") {
    // set a static folder
    app.use(express.static("frontend/build"));

    // Provide a wildcard as a fallback for all routes
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../frontend", "build", "index.html")
        );
    });
}

//Host app at PORT
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}!`));
