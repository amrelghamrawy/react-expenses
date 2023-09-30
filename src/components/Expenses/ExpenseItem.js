import "./ExpenseItem.css";
import "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandle = () => {
    setTitle("updated");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandle}> clickMe </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
