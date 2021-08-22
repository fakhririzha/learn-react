import Expenses from "./components/Expenses";

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
			<Expenses data={expenses} />
		</div>
	);
}

export default App;
