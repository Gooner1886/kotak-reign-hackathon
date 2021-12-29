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
    <>
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
<<<<<<< HEAD
        <div className="third-row">
          <TransactionHistory />
          <QuickTransfer />
        </div>
      </div>
      {/* <Login /> */}
      
    </div>
=======
        <Login method='CRN, Username or Card Number'/>
        <Login method='Password'/>
    </>
>>>>>>> cb1d613cc9767ec8e690d20393c27b1bab15aaee
  );
}

export default App;
