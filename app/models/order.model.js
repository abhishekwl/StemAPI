const mongoose = require("mongoose");
const User = require("./user.model.js");
const Test = require("./test.model.js");

const orderSchema = mongoose.Schema(
    {
        userLatitude: { type: Number, required: true },
        userLongitude: { type: Number, required: true },
        userLandmark: { type: String, required: false, default: "" },
        uid: { type: String, required: true },
        user: User,
        tests: [ Test ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);