var orm = require("../config/orm.js");

var Burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
            console.log(res);
        });
    },
    insertOne: function (burger) {
        orm.insertOne(burger, function (res) {
        console.log(res);
        });
    },
    updateOne: function (id) {
        orm.updateOne( [id], function (res) {
            console.log(res);
        });
    }
};

module.exports = Burger