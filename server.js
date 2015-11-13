// Define Required Modules
var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Configure the app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the Port we want to listen on
var port = process.env.PORT || 3000;

// SUPPORTING FUNCTIONS WILL GO UNDER HERE
var doCalculations = function(request, response) {
    var firstNumber = parseInt(request.body.first);
    var secondNumber = parseInt(request.body.second);
    
    var addition = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var multiplication = firstNumber * secondNumber;
    
    response.json({ message: "Here ya go Lumbergh..", addition: addition, subtraction: subtraction, 
                   multiplication: multiplication });
    
};

// ROUTES
// ============================================================================
var router = express.Router();

// Our first route, a nice little test
router.get('/', function(request, response) {
    response.json({ message: "Anything but Hello World...How about: PC Load Letter...WTF does that mean?" });
});

// ADDITIONAL ROUTES WILL GO UNDER HERE
router.get('/bob', function(request, response) {
    response.json({ message: "I see you've been missing a lot of work Peter" });
});

router.get('/peter', function(request, response) {
    response.json({ message: "I wouldn't say I've been missing it Bob!" });
});

router.post('/tpsReports', doCalculations);

// Register our routes with the application
app.use('/', router);

// START THE SERVER
// =======================================================================
app.listen(port);
console.log('I will listen to you, even if no one else will on port: ' + port);

