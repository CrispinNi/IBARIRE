import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Login from "./pages/Login";
import Purchase from "./pages/Purchase";
import Invoices from "./pages/Invoices";

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchases" element={<Purchase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
