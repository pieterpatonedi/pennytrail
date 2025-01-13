const IncomeSchema = require("../models/income")

exports.addIncome = async(req, res) => {
    const {title, amount, category, description, date} = req.body
    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({message: "Income added!"})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

exports.getIncomes = async(req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: error})  
    }
}

exports.deleteIncome = async(req, res) =>{
    const {incomeId} = req.params
    IncomeSchema.findByIdAndDelete(incomeId).then((income) =>{
        res.status(200).json({message: "Income deleted!"})
    }).catch((error) => {
        res.status(500).json({message: error})
    })
}