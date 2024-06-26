import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onDeleteItem, onLineItems, onclearlist }) {
  const [sortBy, setSortBy] = useState("input");

  let sorted;
  if (sortBy === "input") sorted = items;
  if (sortBy === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed) - b.packed);

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onLineItems={onLineItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onclearlist}>Clear list</button>
      </div>
    </div>
  );
}
