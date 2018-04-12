// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var routerIndex = require('./index'),
	routerHome = require('./home'),
	routerArticleList = require('./articleList'),
	routerMessage = require('./message'),
	routerArticleDetail = require('./articleDetail');
var routeFun = function (app) {
	routerIndex(app);
	routerHome(app);
	routerArticleList(app);
	routerMessage(app);
	routerArticleDetail(app);
};
exports = module.exports = routeFun;