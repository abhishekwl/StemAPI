const Test = require("../models/test.model.js");

exports.create = (req,res)=>{
    if(req.body.hospitalUid && req.body.testName && req.body.hospitalName && req.body.testPrice && req.body.hospitalLatitude && req.body.hospitalLongitude) {
        const test = new Test({
            testName: req.body.testName,
            hospitalName: req.body.hospitalName,
            hospitalImageUrl: req.body.hospitalImageUrl? req.body.hospitalImageUrl : "",
            hospitalUid: req.body.hospitalUid,
            testPrice: req.body.testPrice,
            hospitalLatitude: req.body.hospitalLatitude,
            hospitalLongitude: req.body.hospitalLongitude
        });
        test.save().then(data=>sendData(null,data,res)).catch(err=>sendData(err,null,res));
        console.log("["+req.method+"] "+req.url);
    } else sendData("Missing Query Params",null,res);
};

exports.findAll = (req,res)=>{
    Test.find({}, null, { sort: { testName: 1 } }, (err,data)=>sendData(err,data,res));
    console.log("["+req.method+"] "+req.url);
};

exports.findOne = (req,res)=>{
    Test.findById(req.params.testId, (err,data)=>sendData(err,data,res));
    console.log("["+req.method+"] "+req.url);
};

exports.update = (req,res)=>{
    if(req.body) {
        Test.findByIdAndUpdate(req.params.testId, { $set: req.body }, { new: true }, (err,data)=>sendData(err,data,res));
        console.log("["+req.method+"] "+req.url);
    }
    else sendData("Missing PUT request Body",null,res);
};

exports.delete = (req,res)=>{
    Test.findByIdAndRemove(req.params.testId, (err,data)=>sendData(err,data,res));
    console.log("["+req.method+"] "+req.url);
};

function sendData(err, data, res) {
    if(err) {
        res.status(400).json({ error: err });
        console.log("[ERROR] "+err);
    }
    else res.status(200).json(data);
}