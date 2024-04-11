const express=require('express')

const router=express.Router();

const expnessController=require('../Controllers/expenses');

router.post('/add-expense',expnessController.addExpenses);

router.get('/get-all-expenses',expnessController.getAllExpenses);

router.delete('/delete/:id',expnessController.delete);

router.put('/update/:id',expnessController.update);



module.exports=router;