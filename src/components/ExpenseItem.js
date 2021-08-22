import "./ExpensiveItem.css";

function ExpenseItem(props) {
	const month = props.date.toLocaleString("id-ID", { month: "long" });
	const day = props.date.toLocaleString("id-ID", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<div className="expense-item">
			<div>
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">Rp. {props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
