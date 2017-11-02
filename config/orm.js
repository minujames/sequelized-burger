var connection = require("./connection.js");

var orm = {
  all: function(table, callBack){
    var queryStr = "SELECT * FROM " + table + ";";
    connection.query(queryStr, function(error, result){
      if(error){
        throw error;
      }
      callBack(result);
    });
  },

  create: function(table, objColVals, callBack){
    var queryString = "INSERT INTO " + table + " SET ? ";
    connection.query(queryString, objColVals, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  update: function(table, objColVals, condition, callBack){
    var queryString = "UPDATE " + table + " SET ? WHERE " + condition;
    connection.query(queryString, objColVals, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  delete: function(table, condition, callBack){
    var queryString = "DELETE FROM " + table + " WHERE " + condition;
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  }
};

module.exports = orm;