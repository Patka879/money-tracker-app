import React from "react"
import { useState } from "react"

export default function AddTransaction() {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    return(
        <div className="add">
            <h4 className="section-title">Add new transaction</h4>
            <div className="form">
                <label htmlFor="text">Text
                </label>
                <input 
                    type="text"
                    placeholder="Enter text..."
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <label htmlFor="amount">Amount <br></br> Negative - expense, Positive - income</label><br></br>
                <input
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button 
                    type="submit"
                    className="add-button"
                    >Add transaction
                    </button>
            </div>
        </div>
    )
}