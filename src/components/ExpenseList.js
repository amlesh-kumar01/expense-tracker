import React, { useState, useEffect } from "react";
import "./ExpenseList.css"; // Import the CSS file

const ExpenseList = ({ expenses, setExpenses }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingDescription, setEditingDescription] = useState("");
  const [editingAmount, setEditingAmount] = useState("");
  const [filter, setFilter] = useState("");

  //to store the expenses locally
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //to delete the expenses
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index); //here _ represent that the variable is unused
    setExpenses(updatedExpenses);
  };

  // to edit the expenses
  const editExpense = (index) => {
    setEditingIndex(index);
    setEditingDescription(expenses[index].description);
    setEditingAmount(expenses[index].amount);
  };

  // to save the edit
  const saveEdit = () => {
    const updatedExpenses = expenses.map((expense, index) => {
      if (index === editingIndex) {
        return {
          ...expense,
          description: editingDescription,
          amount: editingAmount,
        };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    setEditingIndex(null);
    setEditingDescription("");
    setEditingAmount("");
  };

  //to filter expense according to different category
  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  // to calculate the total amount of the filtered expenses
  const totalAmount = filteredExpenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  return (
    <div className="expense-list" id="expense-list">
      <h1 className="list-title">Expense List</h1>

      <div className="filter-list">
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

      <ul className="expense-item-list">
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="list-item">
            {editingIndex === index ? (
              <div className="list-item-contents">
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

                <span>{new Date(expense.date).toLocaleDateString()}</span>

                <span>{expense.category}</span>

                <button onClick={() => deleteExpense(index)}>
                  <img
                    src="/images/delete.png"
                    alt=""
                    height="60%"
                  />
                </button>

                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <div className="list-item-contents">
                <span>{expense.description}</span>

                <span>₹{expense.amount}</span>

                <span>{new Date(expense.date).toLocaleDateString()}</span>

                <span>{expense.category}</span>

                <button onClick={() => deleteExpense(index)}>
                  <img src="/images/delete.png" alt="" height="60%" />
                </button>

                <button onClick={() => editExpense(index)}>
                  <img src="/images/edit.png" alt="" height="60%" />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h3 className="total-amount">
        Total Amount: ₹{totalAmount.toFixed(2)}
      </h3>
    </div>
  );
};

export default ExpenseList;
