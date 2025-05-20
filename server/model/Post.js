const Sequelize = require('sequelize');
const sequelize = new Sequelize('computer_repair', 'shaamela', 'strongpassword', {
    dialect:'mysql', 
    host:'localhost'});

module.exports = sequelize;


