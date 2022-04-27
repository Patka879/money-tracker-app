import React from "react"


export default function TransacionList() {
    return(
        <div className="history">
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-button">x</button>
                </li>
            </ul>
        </div>
    )
}