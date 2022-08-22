import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default ExpenseList;
