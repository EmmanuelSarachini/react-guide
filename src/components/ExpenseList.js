import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <div className="expense">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default ExpenseList;
