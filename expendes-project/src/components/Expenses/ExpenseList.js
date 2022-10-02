import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseContent from "./ExpenseContent";
import Card from "../UI/Card";
import ExpesesChart from "./ExpensesChart";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [selectValue, setSelectedValue] = useState("");

  const filterChangeHandler = (selectYear) => {
    setSelectedValue(selectYear);
  };

  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectValue}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ExpesesChart expenses={filteredArray} />
      <ExpenseContent content={filteredArray} />
    </Card>
  );
};

export default ExpenseList;
