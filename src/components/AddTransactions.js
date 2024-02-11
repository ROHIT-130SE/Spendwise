import React, { useState } from "react";

export default function AddTransactions({ id, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
      date: date,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
