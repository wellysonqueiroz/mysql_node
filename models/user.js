const sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users',{
  id:{
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
      type: sequelize.STRING,
      allowNull: false
  },
  price: {
    type: sequelize.DECIMAL,
    allowNull: false
  }

});

User.sync();

module.exports = User;