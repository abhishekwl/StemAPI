const User = require("../models/user.model.js");

exports.create = (req,res)=>{
    if(req.body.userUid && req.body.userName && req.body.userAge && req.body.userGender && req.body.userBloodGroup && req.body.userEmailId && req.body.userContactNumber) {
        const user = new User({
            userName: req.body.userName,
            userAge: req.body.userAge,
            userGender: req.body.userGender,
            userBloodGroup: req.body.userBloodGroup,
            userUid: req.body.userUid,
            userMedicalHistory: req.body.userMedicalHistory? req.body.userMedicalHistory : "",
            userImageUrl: req.body.userImageUrl? req.body.userImageUrl: "",
            userEmailId: req.body.userEmailId,
            userContactNumber: req.body.userContactNumber
        });
        user.save().then(data=>sendData(null,data,res)).catch(err=>sendData(err,null,res));
        console.log("["+req.method+"] "+req.url);
    } else sendData("Missing query params", null, res);
};

exports.find = (req,res)=>{
    User.findOne({ userUid: req.params.userUid }, (err,data)=>sendData(err,data,res));
    console.log("["+req.method+"] "+req.url);
};

exports.update = (req,res)=>{
    if(req.body) {
        User.findOneAndUpdate({ userUid: req.params.userUid }, { $set: req.body }, { new: true }, (err,data)=>sendData(err,data,res));
        console.log("["+req.method+"] "+req.url);
    } else sendData("Missing POST Body", null, res);
};

exports.delete = (req,res)=>{
    User.findOneAndRemove({ userUid: req.params.userUid }, (err,data)=>sendData(err,data,res));
    console.log("["+req.method+"] "+req.url);
};

function sendData(err, data, res) {
    if(err) {
        res.status(400).json({ error: err });
        console.log("[ERROR] "+err);
    }
    else res.status(200).json(data);
}