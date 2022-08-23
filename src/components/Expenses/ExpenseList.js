import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  const [selectValue, setSelectedValue] = useState('2020');
  const filterChangeHandler = (selectYear) => {
    setSelectedValue(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectValue} onFilterChangeHandler={filterChangeHandler}/>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default ExpenseList;
