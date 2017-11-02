
var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
  burger.all(function(data) {
    response.render("index", {burgers: data});
  });
});

router.post("/api/burger", function(request, response){
  burger.create({
    burger_name: request.body.burgerName,
    devoured: (request.body.devoured) ? eval(request.body.devoured) : false
  }, function(result){
    response.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(request, response) {
  var burgerId = request.params.id;
  var condition = "id = " + burgerId;

  burger.update({
    devoured: eval(request.body.devoured)
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(204).end();
    }
  });
});

router.delete("/api/burger/:id", function(request, response){
  var burgerId = request.params.id;
  var condition = "id = " + burgerId;

  burger.delete(condition, function(result){
    if (result.affectedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(204).end();
    }
  });
});

module.exports = router;