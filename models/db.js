
const Sequelize = require('sequelize');

const sequelize = new Sequelize('product', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then (function(){
  console.log("database connection successful!");
}).catch(function(){
  console.log("database connection failed!");

});


module.exports = sequelize;