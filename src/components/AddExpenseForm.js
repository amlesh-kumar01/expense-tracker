import React, { useState, useEffect } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ expenses, setExpenses }) => {
  // Initializing the state to store values
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Storing the expenses in local storage
  useEffect(() => {
    try {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
      console.error("Failed to save expenses to local storage:", error);
    }
  }, [expenses]);

  // To add the submitted data to the array expenses
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString(),
      };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);

      // Clear the form
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  // To check if all the boxes are filled in the form and amount is a valid number
  const isFormValid = () => {
    return description.trim() !== "" && 
           amount.trim() !== "" && 
           !isNaN(amount) && 
           category.trim() !== "";
  };

  return (
    <form onSubmit={handleSubmit} id="expense-form" className="expense-form">
      <h1 className="form-title">Expense Form</h1>
      <div className="form-elements">
        <div className="form-element">
          <label className="form-element-label">
            Category:
            <select
              name="expenseCategory"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Select category</option>
              <option value="stationary">Stationary</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
            </select>
          </label>
        </div>
        <div className="form-element">
          <label className="form-element-label">
            Description:
            <input
              name="expenseDescription"
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>
        <div className="form-element">
          <label className="form-element-label">
            Amount:
            <input
              type="number"
              name="totalAmount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>
        </div>

        <div className="form-element">
        <button
          type="submit"
          disabled={!isFormValid()}
          className="form-submit"
        >
          Add Expense
        </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
