
DROP TABLE IF EXISTS streamerNames;

CREATE TABLE streamerNames (
  streamerId INTEGER NOT NULL AUTO_INCREMENT,
  streamerNames VARCHAR(20) UNIQUE,
  PRIMARY KEY (streamerId)
);


DROP TABLE IF EXISTS groupNames;
		
CREATE TABLE groupNames (
  groupId INTEGER NOT NULL AUTO_INCREMENT,
  groupName VARCHAR(20),
  PRIMARY KEY (groupId)
);


DROP TABLE IF EXISTS streamerXgroup;
		
CREATE TABLE streamerXgroup (
  joinId INTEGER NOT NULL AUTO_INCREMENT,
  streamerId INTEGER NOT NULL ,
  groupId INTEGER NOT NULL ,
  PRIMARY KEY (joinId)
);


-- INSERT INTO groupNames (groupName) VALUES ('GOOD');
-- SELECT groupId FROM groupNames WHERE groupName = 'GOOD';
-- SELECT streamerId FROM streamerNames WHERE streamerNames = 'gosutv';
