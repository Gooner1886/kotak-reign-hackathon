import "./App.css";
import MyCards from "./components/MyCards/MyCards";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-half">
        <Overview />
        <div className="second-row">
          <Transactions />
          <MyCards />
        </div>
        <div className="third-row">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}

export default App;
