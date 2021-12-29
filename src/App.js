import "./App.css";
import MyCards from "./components/MyCards/MyCards";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Transactions from "./components/Transactions/Transactions";
import Login from "./components/Login";
import QuickTransfer from "./components/QuickTransfer/QuickTransfer";

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
          <QuickTransfer />
        </div>
      </div>
      {/* <Login /> */}
      
    </div>
  );
}

export default App;
