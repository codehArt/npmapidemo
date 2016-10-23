// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

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
app.listen(port);
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





// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'its working debug your angular app' }); 
});

router.get('/GetAllComplain', function(req, res) {
    //res.json({ message: 'its done baby.....' });   
    var allcomplain = [];
    allcomplain.push(
		{
			id : 1,
			image : "c:/asd",
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

router.post('/GetAllReportById', function(req, res) {
    //res.json({ message: 'its done baby.....' });   
    var user_id = req.body.id;
    console.log(req.body);
    var allReport = [];
    allReport.push(
		{
			id : 1234,
			complainId : 4321,
			childName : "Vipul Sarvaliya",
			actionOnAccused : "saja thai ",
			status : "khabar nathi ",
			report: "ae pati gyu",
			accusedName : "badha saheb", 
			address: "ghare thi upaido ",
			dateTimeOfRescued : "asdasd"
		});
    allReport.push(
		{
			id : 1234,
			complainId : 4321,
			childName : "Vipul Sarvaliya",
			actionOnAccused : "saja thai ",
			status : "khabar nathi ",
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

//****************************//
// note: post method is not yet implemented i'll updte it soon.
