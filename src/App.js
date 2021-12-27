import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Transactions />
    </div>
  );
}

export default App;
