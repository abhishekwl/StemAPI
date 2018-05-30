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
    } else sendData("Missing Query Params",null,res);
};

exports.findAll = (req,res)=>{
    Test.find({}, (err,data)=>sendData(err,data,res));
};

exports.findOne = (req,res)=>{
    Test.findById(req.params.testId, (err,data)=>sendData(err,data,res));
};

exports.update = (req,res)=>{
    if(req.body) Test.findByIdAndUpdate(req.params.testId, { $set: req.body }, { new: true }, (err,data)=>sendData(err,data,res));
    else sendData("Missing PUT request Body",null,res);
};

exports.delete = (req,res)=>{
    Test.findByIdAndRemove(req.params.testId, (err,data)=>sendData(err,data,res));
};

function sendData(err, data, res) {
    if(err) res.status(400).json({ error: err });
    else res.status(200).json(data);
}