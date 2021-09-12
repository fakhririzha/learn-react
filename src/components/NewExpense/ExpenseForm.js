import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [newExpenseAction, setNewExpenseAction] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const newExpenseButtonHandler = () => {
		setNewExpenseAction("Clicked");
	};

	const newExpenseCancelButtonHandler = () => {
		setNewExpenseAction("");
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
		setNewExpenseAction("");
	};

	if (newExpenseAction !== "Clicked") {
		return (
			<div className="new-expense-button__actions">
				<button onClick={newExpenseButtonHandler} type="submit">
					Tambah Pengeluaran Baru
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Judul</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Biaya</label>
					<input
						type="number"
						value={enteredAmount}
						min="1000"
						step="1000"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Tanggal</label>
					<input
						type="date"
						value={enteredDate}
						min="2020-01-01"
						max="2023-01-01"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={newExpenseCancelButtonHandler}>Batal</button>
				<button type="submit">Tambah Pengeluaran</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
