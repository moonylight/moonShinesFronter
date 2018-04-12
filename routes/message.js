var mongodb = require("../models/db.js");

var routerMessage = function (app) {
	app.get("/message", function (req, res, next) {
        mongodb.autoSelectData("messages", {
            selectCon: {
                isDelete: 0
            },
            limit: 20
        }, function (data) {
            res.render("message", {
                title: "留言",
                messageList: data
            });
        });
		
    });
    app.post("/leaveMessge", function (req, res, next) {
        var param = req.body;
        param._id = new Date().getTime();
        param.isDelete = 0;
        mongodb.insertData("messages", param, function (data) {
            res.json(data);
        });
    });
};
module.exports = routerMessage;