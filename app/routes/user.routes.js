module.exports = (app)=>{
    const users = require("../controllers/user.controller.js");
    const apiPath = require("../../config").apiRoute+"/users";

    app.post(apiPath, users.create);
    app.get(apiPath+"/:userUid", users.find);
    app.put(apiPath+"/:userUid", users.update);
    app.delete(apiPath+"/:userUid", users.delete);
};