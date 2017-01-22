const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');


var User = sequelizeConnection.define('user',{
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	zip: Sequelize.INTEGER,
	pantryLocation: Sequelize.INTEGER,
	location: Sequelize.INTEGER,
	birthDate: Sequelize.DATE,
	password: Sequelize.STRING,
	isAvailable: Sequelize.BOOLEAN
});

User.sync()
module.exports = User