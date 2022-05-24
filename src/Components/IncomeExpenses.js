import { useContext } from "react"
import React from 'react'
import { GlobalContext } from "../context/GlobalState"


const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  // eslint-disable-next-line
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    .toFixed(2)  

  return (
    <div className="income-expense">
        <span className="income">
            <h4>Income</h4>
            <p className="income-amount">+${income}</p>
        </span>
        <span className="expense">
            <h4>Expense</h4>
            <p className="expense-amount">-${expense}</p>
        </span>       
    </div>
  )
}

export default IncomeExpenses
