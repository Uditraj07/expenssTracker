const Sequelize=require('sequelize');

const sequelize=new Sequelize('node_complete','root','Rohit07',{
    host: 'localhost',
    dialect:'mysql'
  });
module.exports=sequelize;

