import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/"
            element={<Login method="CRN, Username or Card Number" />}
          ></Route>
          <Route path="/password" element={<Login method="Password" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
