import React from "react";

function Form({ addItem, quantity, setQuantity, description, setDescription }) {
  return (
    <form className="add-form" onSubmit={addItem}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select
        name="number"
        id="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Item..."
        value={description}
        autoComplete="off"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
