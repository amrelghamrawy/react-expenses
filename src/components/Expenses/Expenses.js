
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == yearFilter;
  });

  return (
    <Card className="expenses">

      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpensesFilter
        selected={yearFilter}
        onchangeFilter={changeFilterHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
