const express=require('express');

const app=express();

const sequelize=require('./Utill/database');

const path=require('path')


const Model=require('./Model/expense')

const expenseRoute=require('./Router/expense')

const bodyParser=require('body-parser')

app.use(express.static(path.join(__dirname,'public','Javascripts')));

app.use(bodyParser.json())

app.use('/Expenses',expenseRoute)

app.use('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'Views','index.html'))
})

sequelize.sync()

app.listen(5000)