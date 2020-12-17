const db = require("../../database/connection.js");

module.exports = {
    get
  };

  function get() {
    return db("fruits")
  }
  