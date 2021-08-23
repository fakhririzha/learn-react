import "./ExpenseForm.css";

const ExpenseForm = () => {
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Judul</label>
					<input type="text" />
				</div>
				<div className="new-expense__control">
					<label>Biaya</label>
					<input type="number" />
				</div>
				<div className="new-expense__control">
					<label>Tanggal</label>
					<input type="date" min="2020-01-01" max="2023-01-01" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Tambah Pengeluaran</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
