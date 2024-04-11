const Sequelize=require('sequelize');

const sequelize=require('../Utill/database')

const Expenses=sequelize.define('expenss',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
       amount:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      purpose:{
        type: Sequelize.STRING,
        allowNull: false
      }
})

module.exports=Expenses;