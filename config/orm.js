var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err ,result){
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
    insertOne: function (burger) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
    updateOne: function (id) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }
}

module.exports = orm
