var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cors())
app.use(bodyParser.json())


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

//GET streamer names from twitch API
app.get('/groups', function (req, res) {
	//options containing token and url
	var options = {
	  url: 'https://api.twitch.tv/helix/streams?first=15',
	  headers: {'Client-ID': '7fat6yyl6puo9pjt6eypzfciu04pyj'}
	}
	//request to twitch
	request(options, function (err, response, body) {
		//take streamer names out of response and add to database / send back to client 
		var names = JSON.parse(body).data.map(el=> el.thumbnail_url.split('_')[2].split('-')[0])
		names.forEach(el => db.addStreamerName(el, function(e){console.log(e, 'was added to streamerNames Table')}))
		res.status(200);
		res.send(JSON.parse(body));
	})
})

//POST 
app.post('/groups', function(req, res) {
	db.addGroup(req.body, function(data){
	  res.status(201);
	  res.send('added', JSON.stringify(req.body))
	})

})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});



// 	db.selectAllStreamers(function(data){
// 		res.send(JSON.stringify(data))

// 	})
	
// });




  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });