module.exports = (app)=>{
    const tests = require("../controllers/test.controller.js");
    const apiPath = require("../../config").apiRoute+"/tests";

    app.post(apiPath, tests.create);
    app.get(apiPath, tests.findAll);
    app.get(apiPath+"/:testId", tests.findOne);
    app.put(apiPath+"/:testId", tests.update);
    app.delete(apiPath+"/:testId", tests.delete);
};