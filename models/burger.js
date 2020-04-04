var orm = require('../config/orm.js');

var burger = {
  allBurgers: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertBurger: function(cols, vals, cb) {
    orm.insertBurger('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  updateBurger: function(objColVals, condition, cb) {
    orm.updateBurger('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteBurger: function(condition, cb) {
    orm.deleteBurger('burgers', condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;