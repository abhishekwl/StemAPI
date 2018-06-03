const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        userAge: { type: Number, required: true },
        userGender: { type: String, required: true },
        userBloodGroup: { type: String, required: true },
        userMedicalHistory: { type: String, required: false, default: "" },
        userImageUrl: { type: String, required: false, default: "" },
        userUid: { type: String, required: true },
        userEmailId: { type: String, required: true },
        userContactNumber: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);