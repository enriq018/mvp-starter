var mysql = require('mysql');

//mysql -u root -p twitch < twitchMVP.sql

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
    // console.log('===========================', name)
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
            // console.log('333333333333333333333333333333333', streamerNames[i])
            var q3 = `SELECT streamerId FROM streamerNames WHERE streamerNames = '${streamerNames[i]}';`
            connection.query(q3, function(err, results2, fields) {
              // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
              var STREAMERID = parseInt(JSON.stringify(results2).split(':')[1].split('}')[0])
              // console.log(STREAMERID)
              var q4 =`INSERT INTO streamerXgroup (streamerId, groupId) VALUES (${STREAMERID},${GROUPID});`
              connection.query(q4, function(err, results3, fields) {
                console.log('added to join table', STREAMERID, GROUPID)
              })
            })
          }
          // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
          callback();
        }
      })
    }
  })
}

var getAllGroups = function (callback) {
  var q = `select groupName from groupNames;`;
  connection.query(q, function(err, results, field) {

        if(err) {
      callback(err, null);
    } else {
      console.log(results);
      callback(results)
    }

  })


}


var getGroupRoom = function (groupName, callback) {
  var q1 = `select groupId from groupNames where groupName = '${groupName}'`
  connection.query(q1, function(err, results, fields) {
    if(err) {
      callback(err)
    } else {
      var results = parseInt(JSON.stringify(results).split(':')[1].split('}')[0])
      var q2 = `select streamerId from streamerXgroup where groupId = '${results}'`
      connection.query(q2, function(err, results2, fields) {
        if(err){
          callback(err)
        } else {
          console.log(JSON.parse(JSON.stringify(results2)).map(el=>el.streamerId))
          var streamerIds = JSON.parse(JSON.stringify(results2)).map(el=>el.streamerId)
          console.log('PLEASEEEEEEEEEEEEEEEEEEEEEE', streamerIds)
          for(var i =0; i < 4; i++) {
            if(streamerIds[i] === undefined) {
              streamerIds[i] = 1;
            }
          }
          var q3 = `select streamerNames from streamerNames where 
          streamerId = '${streamerIds[0]}'
          OR streamerId = '${streamerIds[1]}' 
          OR streamerId = '${streamerIds[2]}' 
          OR streamerId = '${streamerIds[3]}';`
          connection.query(q3, function(err, results3, fields) {
            callback(JSON.parse(JSON.stringify(results3)).map(el => el.streamerNames))

          })
          
          
        }
      })
    }
  })
}
  

module.exports = {
  selectAllStreamers:selectAllStreamers,
  addStreamerName: addStreamerName,
  addGroup: addGroup,
  getAllGroups: getAllGroups,
  getGroupRoom: getGroupRoom

}


  //select groupId from groupNames where groupName = x; 
    //select streamerId from streamerXgroup where groupId = results
    //for loop to create array 
    //select streamerNames from streamerNames where streamerId = results2