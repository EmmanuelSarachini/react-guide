import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  const [selectValue, setSelectedValue] = useState('');
  const filterChangeHandler = (selectYear) => {
    setSelectedValue(selectYear);
  };

  const filteredArray = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectValue} onFilterChangeHandler={filterChangeHandler}/>
      {filteredArray.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
}

export default ExpenseList;
