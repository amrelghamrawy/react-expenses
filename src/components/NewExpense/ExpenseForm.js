import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  //way 1 multi state 
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
        title: enteredTitle , 
        amount: +enteredAmount , 
        date: new Date(enteredDate) , 
    } ; 

    props.onSaveExpenseData(expenseData) ; 

    setEnterdTitle('') ; 
    setEnterdAmount('') ; 
    setEnterdDate('') ; 
  }

  //way2 single state
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.taget.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.taget.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.taget.value,
      };
    });
  };*/

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
