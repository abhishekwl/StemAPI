const Order = require("../models/order.model.js");
const Test = require("../models/test.model.js");
const User = require("../models/user.model.js");

exports.create = (req,res)=>{
    if(req.body.userLatitude && req.body.userLongitude && req.body.uid && req.body.user && req.body.tests) {
        const order = new Order({
            userLatitude: req.body.userLatitude,
            userLongitude: req.body.userLongitude,
            userLandmark: req.body.userLandmark? req.body.userLandmark : "",
            uid: req.body.uid,
            user: req.body.user,
            tests: req.body.tests
        });
        console.log("["+req.method+"] "+req.url);
        order.save((err,data)=>sendData(err,data,res));
    } else sendData("Missing query parameters", null, res);
};

exports.findAll = (req,res)=>{
    if(req.query.uid) {
        User.findOne({ userUid: req.query.uid }, (err,data)=>{
            if(err) {
                console.log("[ERROR] "+req.method+" - "+req.url+" : UID does not exist.");
                sendData(err,data,res);
            }
            else {
                console.log("["+req.method+"] "+req.url);
                Order.find({ uid: req.query.uid }, (err,data)=>sendData(err,data));
            }
        });
    } else sendData("Missing Query Parameter <uid>",null,res);
};


function sendData(err,data,res) {
    if(err) {
        console.log("[ERROR] "+console.log(err));
        res.status(400).json({ error: err });
    } else res.status(500).json(data);
};