import React from "react";

export default function Status({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to the list 🚀</em>
      </p>
    );
  } else {
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percent = Math.round((packedItems / numItems) * 100);

    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? `You get ${percent}% ready  to go!`
            : `You have ${numItems} items on your list and you already packed ${packedItems} (${percent}%)`}
        </em>
      </footer>
    );
  }
}
