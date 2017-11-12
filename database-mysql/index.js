var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'twitch'
});

var selectAllStreamers = function(callback) {
  connection.query('SELECT * FROM streamerNames', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(results);
    }
  });
};

var addStreamerName = function(name, callback) {
    console.log('===========================', name)
    var q = `insert ignore into streamerNames (streamerNames) VALUES ('${name}')`
  connection.query(q, function(err, results, fields) {
    if(err) {
      callback(err)
    } else {
      callback(name)
    }
  })
}

var addGroup = function (obj, callback) {
  

}

module.exports = {
  selectAllStreamers:selectAllStreamers,
  addStreamerName: addStreamerName
}


