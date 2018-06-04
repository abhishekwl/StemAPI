module.exports = (app)=>{
    const orders = require("../controllers/order.controller.js");
    const apiPath = require("../../config").apiRoute+"/orders";

    app.post(apiPath, orders.create);
    app.get(apiPath, orders.findAll);
    app.get(apiPath+"/:orderId", orders.find);
    app.put(apiPath+"/:orderId", orders.update);
    app.delete(apiPath+"/:orderId", orders.delete);
};