var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile('index.html', {"root": __dirname});
});

var router = express.Router();

router.get('/css/bootstrap.css', function(request, response) {
    response.sendFile("css/bootstrap.css", {"root": __dirname});
});

router.get('/css/custom.css', function(request, response) {
    response.sendFile("css/custom.css", {"root": __dirname});
});

router.get('/app.js', function(request, response){
    response.sendFile("app.js", {"root": __dirname});
});

router.get('/res/:resname', function(request, response){
    response.sendFile("res/" + request.params.resname, {"root": __dirname});
});

app.use(router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


