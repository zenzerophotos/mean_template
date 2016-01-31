var express = require('express'),
    server = express();

server.use(express.static(__dirname+'/css'));

server.get('/', function(req, res){
	res.sendFile('html/index.html', { root: __dirname });
});

server.post('/signup', function(req, res){
  console.log('you have signed away your first born');
  res.redirect('/');
});

server.listen(8080, function(){
	console.log("Now listening on port 8080");
});
