// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var routerIndex = function (app) {
	app.get("/", function (req, res, next) {
		res.render("index", {
			title: "moonShinesLink"
		});
	});
};
module.exports = routerIndex;
