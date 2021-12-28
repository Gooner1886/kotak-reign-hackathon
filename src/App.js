import "./App.css";
import MyCards from "./components/MyCards/MyCards";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar";
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
      </div>
    </div>
  );
}

export default App;
