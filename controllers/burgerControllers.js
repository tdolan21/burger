var express = require("express");

var router = express.Router();

var burger = require("../models/Burger.js");

router.get("/burgers", function(req, res) {
  burger.selectAll(function(res) {
    var burgerObj = {
      burger: data
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
    
  });
});
router.post("/api/burgers", function(req, res) {
  burgers.create(
    ["name", "bacon"],
    [req.body.name, req.body.bacon],
    [
      function(result) {
        res.json({ id: result.insertId });
      }
    ]
  );
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
     bacon: req.body.bacon
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;