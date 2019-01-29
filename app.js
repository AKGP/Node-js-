var express = require('express');
var path = require('path');
var app = express();
var mysql = require('mysql');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

//Middlewares
//#############################################
app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',appRoutes);
//##############################################

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname+"/public/app/views/index.html"));
});
var port = 8000 ||process.env.PORT;
app.listen(port);
console.log("Server is running on "+port);
