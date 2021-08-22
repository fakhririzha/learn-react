import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{ id: "e2", title: "New TV", amount: 594.67, date: new Date(2021, 2, 27) },
		{
			id: "e3",
			title: "Health Bills",
			amount: 94.67,
			date: new Date(2021, 2, 26),
		},
		{
			id: "e4",
			title: "Electricity",
			amount: 294.67,
			date: new Date(2021, 2, 25),
		},
	];
	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date.toISOString()}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date.toISOString()}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date.toISOString()}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date.toISOString()}
			></ExpenseItem>
		</div>
	);
}

export default App;
