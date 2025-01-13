const router = require('express').Router()
const {addIncome, getIncomes, deleteIncome} = require('../controllers/income')
const {addExpense, getExpenses, deleteExpense} = require('../controllers/expense')

router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:incomeId', deleteIncome)
        .post('/add-expense', addExpense)
        .get('/get-expenses', getExpenses)
        .delete('/delete-expense/:expenseId', deleteExpense)


module.exports = router