import React, { useState, useEffect } from 'react';
import './ExpenseList.css'; // Import the CSS file

const ExpenseList = ({ expenses, setExpenses }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingDescription, setEditingDescription] = useState('');
  const [editingAmount, setEditingAmount] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);//here _ represent that the variable is unused
    setExpenses(updatedExpenses);
  };

  const editExpense = (index) => {
    setEditingIndex(index);
    setEditingDescription(expenses[index].description);
    setEditingAmount(expenses[index].amount);
  };

  const saveEdit = () => {
    const updatedExpenses = expenses.map((expense, index) => {
      if (index === editingIndex) {
        return { ...expense, description: editingDescription, amount: editingAmount };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    setEditingIndex(null);
    setEditingDescription('');
    setEditingAmount('');
  };

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  const totalAmount = filteredExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <div className="filter">
        <label>
          Filter by Category:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="stationary">Stationary</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="expense-item">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={editingAmount}
                  onChange={(e) => setEditingAmount(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{expense.description}</span>
                <span>₹{expense.amount}</span>
                <span>{new Date(expense.date).toLocaleDateString()}</span>
                <span>{expense.category}</span>
                <button onClick={() => deleteExpense(index)}>Delete</button>
                <button onClick={() => editExpense(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="total-amount">
        Total Amount: ₹{totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
