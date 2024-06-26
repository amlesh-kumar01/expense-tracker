import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="app-page">
      <Router>
        <Routes>
        <Route
            exact path={'/'}
            element={
              <>
                <Navbar />
                <HeroSection />
                {/* <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
                <ExpenseList expenses={expenses} setExpenses={setExpenses} /> */}
              </>
            }
          />
          <Route
            exact path={'/home'}
            element={
              <>
                <Navbar />
                <HeroSection />
              </>
            }
          />
          <Route
            path="/add-expense"
            element={
              <>
                <Navbar />
                <p style={{ height: "60px", marginTop: "0" }}></p>
                <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
              </>
            }
          />
          <Route
            path="/expense-list"
            element={
              <>
                <Navbar />
                <p style={{ height: "60px", margin: 0 }}></p>
                <ExpenseList expenses={expenses} setExpenses={setExpenses} />
              </>
            }
          />
          <Route
            path="/track"
            element={
              <>
                <Navbar />
                <p style={{ height: "60px", margin: 0 }}></p>
                <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
                <ExpenseList expenses={expenses} setExpenses={setExpenses} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
