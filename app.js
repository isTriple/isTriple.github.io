/* Copyright 2018-2019 Triple, Inc.
 * Licensed under MIT (https://github.com/triple/gettriple/blob/master/LICENSE)
 * Triple v0.0.0 (http://triple.com)
 */
/*!
/***/

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	User = require('./api/models/userListModels'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userListRoutes');
routes(app);

app.listen(port, function(){
	console.log('server is up and listen on ' +port+ '...');
});
