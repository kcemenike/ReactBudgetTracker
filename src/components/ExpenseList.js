import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  //   const expenses = [
  //     { id: 12, name: "shopping", cost: 40 },
  //     { id: 13, name: "car", cost: 4400 },
  //     { id: 14, name: "holiday", cost: 100 },
  //     { id: 15, name: "food", cost: 200 },
  //   ];
  return (
    <div>
      <ul className="list-group">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
