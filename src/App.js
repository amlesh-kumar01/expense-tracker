import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import NotFound from "./components/Custom404";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  })
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
                <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
                <ExpenseList expenses={expenses} setExpenses={setExpenses} />
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
          <Route
            path="/*"
            element={
              <>
                <NotFound/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
