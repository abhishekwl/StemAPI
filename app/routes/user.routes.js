module.exports = (app)=>{
    const users = require("../controllers/user.controller.js");
    const apiPath = require("../../config").apiRoute+"/users";

    apiPath.post(apiPath, users.create);
    apiPath.get(apiPath+"/:userUid", users.find);
    apiPath.put(apiPath+"/:userUid", users.update);
    apiPath.delete(apiPath+"/:userUid", users.delete);
};