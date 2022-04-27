import Header from "./Components/Header";
import Balance from "./Components/Balance"
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList"
import AddTransaction from "./Components/AddTransaction"


export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </div>
  </div>
  )
}