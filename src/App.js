import React from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = {
    expenses: [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]};

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"), 
  //   React.createElement(ExpenseList, { expenses: expenses.expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses.expenses} />
    </div>
  );
}

export default App;
