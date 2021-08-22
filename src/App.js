import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Asuransi Mobil",
			amount: 250000,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e2",
			title: "TV Baru",
			amount: 4799000,
			date: new Date(2021, 2, 27),
		},
		{
			id: "e3",
			title: "Iuran BPJS",
			amount: 150000,
			date: new Date(2021, 2, 26),
		},
		{
			id: "e4",
			title: "Listrik",
			amount: 375895,
			date: new Date(2021, 2, 25),
		},
	];
	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
		</div>
	);
}

export default App;
