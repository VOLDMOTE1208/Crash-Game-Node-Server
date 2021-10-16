var mysql = require('mysql');

exports.connectDB = function() {
    // var db = mysql.createConnection({
    //     host: "sql271.main-hosting.eu",
    //     user: "u649647356_ludo",
    //     password: "+l1;@1oD2HG",
    //     database: "u649647356_ludo"
    // });
    var db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "ludo"
    });
    
    db.connect(function(err) {
        if (err) {
            console.log("Error: DB Connection.");
            console.log(err);
        } else {
            console.log("Success: DB Connection!");
        }
    });
    
    db.on('error', function onError(err) {
        // console.log('db error', err);
        // if (err.code == 'PROTOCOL_CONNECTION_LOST') {   // Connection to the MySQL server is usually
        //     connectDatabase();                         // lost due to either server restart, or a
        // } else {                                        // connnection idle timeout (the wait_timeout
        //     throw err;                                  // server variable configures this)
        // }
        //connectDatabase();
        //connect();
    });

    return db;
};

exports.closeDB = function(db) {
    //db.end();
};
