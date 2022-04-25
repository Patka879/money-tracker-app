import React from "react"


export default function Balance() {
    return(
        <div className="balance">
            <span className="balance-stats">
                <h4 className="balance-title">Your Balance</h4>
                <p className="balance-total">$100</p>
            </span>
            <span className="income-expense">
                <span className="income">
                    <p className="income-expense-title">Income</p>
                    <p className="income-amount">100</p>
                </span>
                <span className="expense">
                    <p className="income-expense-title">Expense</p>
                    <p className="expense-amount">200</p>
                </span>
            </span>
        </div>
    )
}