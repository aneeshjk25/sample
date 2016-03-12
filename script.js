var express = require('express'),
	app = express(),
	port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

app.listen(port);