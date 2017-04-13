const Sequelize = require('sequelize');
// const sequelizeConnection = require('../db');
const sequelizeConnection = process.env.NODE_ENV === 'production' ? new Sequelize(process.env.DATABASE_URL) : new Sequelize('postgres://parthjhaveri@localhost:5432/seniorconnect');

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
