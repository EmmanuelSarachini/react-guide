import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseContent.css";

const ExpenseContent = ( props ) => {
  if (props.content.length === 0) {
    return <h2 className="expenses-content__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-content">
      {props.content.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseContent;
