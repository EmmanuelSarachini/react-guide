import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    setIsAddingExpense(false);
  };

  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const AddNewExpenseHandler = () => {
    setIsAddingExpense(true);
  };

  const cancelSubmitHandler = () => {
    setIsAddingExpense(false);
  };

  if (!isAddingExpense) {
    return (
      <div>
        <button type="submit" onClick={AddNewExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2022-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions_group">
        <div className="new-expense__actions">
          <button type="submit" onClick={cancelSubmitHandler}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
