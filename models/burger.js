var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.all("burgers", function(result) {
      callBack(result);
    });
  },

  create: function(objColVals, callBack){
    orm.create("burgers", objColVals, function(result){
      callBack(result);
    });
  },

  update: function(objColVals, condition, callBack){
    orm.update("burgers", objColVals, condition, function(result) {
      callBack(result);
    });
  },

  delete: function(condition, callBack){
    orm.delete("burgers", condition, function(result){
      callBack(result);
    });
  }
};

module.exports = burger;
