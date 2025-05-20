const Sequelize = require('sequelize');
const sequelize = require('./Post');

const Information = sequelize.define("Information", {
    Name:{
         type: Sequelize.STRING,
         allowNull: false
     },
     PhoneNumber:{
         type: Sequelize.INTEGER,
         allowNull:false
     },
     Email:{
         type: Sequelize.STRING,
         allowNull: false
     },
     Problem : {
         type: Sequelize.STRING,
         allowNull: false
     },

 });

 module.exports = Information;
 
