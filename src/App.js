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

	// FIXME Ini adalah syntax jika menggunakan syntax React versi lama.
	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Let's get started!"),
	// 	React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items={expenses} />
		</div>
	);
}
// TODO Membuat dynamic web application (Lecture 40 - Summary)
export default App;
