import "./App.css";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-half">
        <Overview />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
