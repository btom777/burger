var mysql = require('mysql');

// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

var source = {
    // localhost
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "exWHYzee123",
        database: "burgers_db"
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: 'z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'u1vekjuztwxe03xm',
        password: "mqt70h61dqqetgmb",
        database: "fzy59kbzx59rnnlw" 
    }
}

// we use source.[name of connection] to hook into mysql

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;