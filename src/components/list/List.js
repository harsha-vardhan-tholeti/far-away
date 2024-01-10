import React from "react";

function List({ items, checkItem, deleteItem, sortItems, clearItems }) {
  return (
    <div className="list">
      <ul className="list-items">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              name="item-checkbox"
              id="item-checkbox"
              onClick={() => checkItem(item.id)}
            />
            <span className={`item-name ${item.packed ? "packed" : ""}`}>
              {item.quantity} {item.description}
            </span>
            <button className="btn-item" onClick={() => deleteItem(item.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div className="list-btn">
        <select name="" id="sort" onChange={(e) => sortItems(e.target.value)}>
          {[
            "SORT BY INPUT ORDER",
            "SORT BY PACKED STATUS",
            "SORT BY DESCRIPTION",
          ].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="clear-btn" onClick={clearItems}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default List;
