import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};
export default App;
