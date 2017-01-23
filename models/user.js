const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

var User = sequelizeConnection.define('user',{
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	zip: Sequelize.INTEGER,
	pantryLocation: Sequelize.STRING,
	location: Sequelize.STRING,
	isAvailable: Sequelize.BOOLEAN,
	beacon: Sequelize.BOOLEAN

});

User.sync()
module.exports = User
