import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    
      
      <>
        <Navbar />
        <HeroSection /><AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      </>
      
  );
}

export default App;
