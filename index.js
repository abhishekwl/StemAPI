const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const config = require("./config");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUri).then(()=>{
    console.log("[MONGODB] Server sucessfully hooked to DB");
}).catch(err=>{
    console.log("[MONGODB] Could not connect to database. ERR: "+err);
    process.exit();
});

app.get('/', (req,res)=>{
    res.status(200).json({ "message": "All requests should be pointed to /api/vi/" });
});

require("./app/routes/test.routes.js")(app);
app.listen(PORT, "0.0.0.0", ()=>{
    console.log("[SERVER] Listening on port "+PORT);
});