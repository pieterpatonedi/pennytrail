const ExpenseSchema = require("../models/expense")

exports.addExpense = async(req, res) => {
    const {title, amount, category, description, date} = req.body
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !(typeof amount === 'number')){
            return res.status(400).json({message: 'Amount needs to be a positive number!'})
        }
        await expense.save()
        res.status(200).json({message: "Expense added!"})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

exports.getExpenses = async(req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: error})  
    }
}

exports.deleteExpense = async(req, res) =>{
    const {expenseId} = req.params
    ExpenseSchema.findByIdAndDelete(expenseId).then((expense) =>{
        res.status(200).json({message: "Expense deleted!"})
    }).catch((error) => {
        res.status(500).json({message: error})
    })
}