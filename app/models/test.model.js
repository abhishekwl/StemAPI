const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
    {
        testName: { type: String, required: true },
        hospitalName: { type: String, required: true },
        hospitalImageUrl: { type: String, required: false, default: "" },
        hospitalUid: { type: String, required: true },
        testPrice: { type: Number, required: true },
        hospitalLatitude: { type: Number, required: true },
        hospitalLongitude: { type: Number, required: true },
        popularity: { type: Number, required: false, default: 0 }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Test", testSchema);