import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		console.log("In Expenses.js");
		console.log(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => {
					return (
						<ExpenseItem
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default Expenses;
