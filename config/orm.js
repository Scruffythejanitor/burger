const connection = require("../config/connection.js");

const database = connection.database

const orm = {
    all: function(callback){
        var command = "SELECT * FROM" + database + ";";
        connection.query(command, function(err, res){
            if (err){
                throw err;
            }
            callback(result);
        })
    },
    create: function()
}