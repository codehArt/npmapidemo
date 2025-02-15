// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('link-to-mongodb', (err, database) => {
//   // ... start the server
// });
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8085;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port,"0.0.0.0");
console.log('Magic happens on port ' + port);



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


var user = {};





// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'its working debug your angular app' }); 
});

router.get('/GetAllComplainForDCPU', function(req, res) {
    //res.json({ message: 'its done baby.....' });   
    var allcomplain = [];
    allcomplain.push(
		{
			id : 1,
			image : "",
			gpsLocation : {
				latitude : 12.12,
				longitude:12.21
			},
			userId : 12,
			dcpuId : 123 ,
			dateTime : "asdasd"
		});
    res.json(allcomplain);
});


router.post('/RegisterUser',function(req, res){
	
	user.number = req.body.number;
	user.complain = [];
	console.log(user);
	res.json("OK");
});

var complain = {};

router.post('/RegisterComplainById',function(req, res){
	// console.log(req.body.number);
	console.log(req.body);
	// complain.number = req.body.number;
	complain.text = req.body.text;
	//user.complain.push(req.body.number);
	// var obj.childImage = 
	// var userId = req.body.number;
	// var childImage = req.body.image;
	// var location = { longitude : req.body.location.longitude,latitude : req.body.location.latitude};
	//var complainText = req.body.text;  
	console.log(user);
	// console.log(childImage);
	// console.log(location);
	// console.log(complainText);
	res.json("Complain Submitted Successfully." + req.body.text);
});


router.post('/SetProfileById',function(req, res){
	var userId = req.body.id;
	var userImage = req.body.image; //TODO : save in databse based on the id
	var userName = req.body.name;
	//console.log(req.body);
	var profileToReturn = {"userName" : userName, "userImage" : "image","filedComplain" : 123, "resolvedComplain" : 111 };
	res.json(profileToReturn);
});


router.post('/GetAllReportById', function(req, res) {
    //res.json({ message: 'its done baby.....' });   
    var user_id = req.body.id;
    console.log(req.body);
    console.log(user_id);
    var allReport = [];
    allReport.push(
		{
			id : 1234,
			complainId : 1,
			childName : "child 1",
			actionOnAccused : "saja thai ",
			status : "rescued ",
			report: "ae che ne ek chokaro hato e he ne cha ni kitli halavato to ane ame ya cha piva jata ta pati gyu",
			accusedName : "badha saheb", 
			address: "ghare thi upaido ",
			dateTimeOfRescued : "asdasd"
		});
    allReport.push(
		{
			id : 12345,
			complainId : 2,
			childName : "child 2",
			actionOnAccused : "saja thai",
			status : "In Progress",
			report: "ae pati gyu",
			accusedName : "badha saheb", 
			address: "ghare thi upaido ",
			dateTimeOfRescued : "asdasd"
		});
    res.json(allReport);
});




// user api 
router.get('/user', function(req, res) {
    res.json({ message: 'its user' });   
});
// more routes for our API will happen here
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



//Hello bhavik and vpul

// regarding our api issue over network 
// this demo is created for accessing api's over network 
// if you want access your api over network you have to replace just localhost with your current ip address.

//--------------------------------//
// how to run this demo 
//--------------------------------//
// just open terminal or cmd(as admin specially for bhavik) within this folder and 
// write "node server.js" and hit enter 
// when you run this command you can see "magic happens on port 8085"
//-----Get API-------------------//
// if you want to access your "GetAllComplain" api (line no 62) 
// you have to open this link ( localhost:8085/api/user ) in browser
// and you can see output as json array which we made in that function.
//-----Post API-------------------//
//  it's done unfotunately i am not able to explain it via 
//  comment so put it on stack.  


//--------------------------------//
/////  create new api
//--------------------------------//
// what you have to do for creating new api,
// you have to analyze all data which is required 
// and you have to make its json object in this file and
// return it like router.get() or router.post() method   
