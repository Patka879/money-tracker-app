import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function AddTransaction() {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction);
      }

    return(
        <div className="add">
            <h3 className="section-title">Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="text">Text</label>
                <input 
                    type="text"
                    placeholder="Enter text..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <label htmlFor="amount">Amount <br></br>(Negative - expense, Positive - income)</label><br></br>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount..."
                />
                <button className="add-button">Add transaction</button>
            </form>
        </div>
    )
}