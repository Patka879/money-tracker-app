import Balance from "./Components/Balance"
import History from "./Components/History"
import Add from "./Components/Add"

export default function App() {
  return (
    <div className="container">
    <h1 className="app-title"> Expense Tracker </h1>
    <div className="app-content">
        <Balance />
        <History />
        <Add />
    </div>
</div>
  );
}
