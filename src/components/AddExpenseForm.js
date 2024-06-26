import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ expenses, setExpenses }) => {
  
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  
  //storing the expenses on local storage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString()
      };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);

      // Clear the form
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  const isFormValid = () => {
    return description && amount && category;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Description:
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="stationary">Stationary</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
          </select>
        </label>
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
