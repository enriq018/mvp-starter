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

var addGroup = function (groupName, streamerNames, callback) {
  // console.log('inside ADD GROUP', groupName)
  var q1 = `INSERT IGNORE INTO groupNames (groupName) VALUES ('${groupName}');`
  connection.query(q1, function(err, results, fields) {
    if(err) {
      callback(err)
    } else {
      // console.log('11111111111111111111111111111111');
      //gets group id 
      var q2 = `SELECT groupId FROM groupNames WHERE groupName = '${groupName}';`
      connection.query(q2, function(err, results, fields) {
        // console.log('22222222222222222222222222222222222')
        if(err) {
          callback(err)
        } else {
          //GROUP ID
          var GROUPID = parseInt(JSON.stringify(results).split(':')[1].split('}')[0]);
          for(var i = 0; i < streamerNames.length; i++) {
            console.log('333333333333333333333333333333333', streamerNames[i])
            var q3 = `SELECT streamerId FROM streamerNames WHERE streamerNames = '${streamerNames[i]}';`
            connection.query(q3, function(err, results2, fields) {
              console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
              var STREAMERID = parseInt(JSON.stringify(results2).split(':')[1].split('}')[0])
              console.log(STREAMERID)
              var q4 =`INSERT INTO streamerXgroup (streamerId, groupId) VALUES (${STREAMERID},${GROUPID});`
              connection.query(q4, function(err, results3, fields) {
                console.log('added to join table', STREAMERID, GROUPID)
              })
            })
          }
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
          callback();
        }
      })
    }
  })
}

module.exports = {
  selectAllStreamers:selectAllStreamers,
  addStreamerName: addStreamerName,
  addGroup: addGroup
}


