import React from "react"

export default function Add() {
    return(
        <div className="add">
            <h4 className="section-title">Add new transaction</h4>
            <div className="form">
                <label for="enterText">Text
                </label><br></br>
                <input 
                    type="text"
                    placeholder="Enter text..."
                    name="enterText"
                /><br></br>
                <label for="amount">Amount <br></br> Negative - expense Positive - income</label><br></br>
                <input
                    type="text"
                    placeholder="Enter amount.."
                    name="amount"
                />
                <button type="submit">Add transaction</button>
            </div>
        </div>
    )
}