import React from "react";

function Footer({ items }) {
  return (
    <div className="footer">
      {items.length === 0 && "Start Adding some items to you packing list 🚀."}
      {items.length > 0 &&
        items.filter((item) => item.packed).length <
          items.filter((item) => item).length &&
        `You have ${items.length} items on your list, and you already packed ${
          items.filter((item) => item.packed).length
        }
       (${
         (items.filter((item) => item.packed).length /
           items.filter((item) => item).length) *
         100
       } %)`}
      {items.length !== 0 &&
        items.filter((item) => item.packed).length ===
          items.filter((item) => item).length &&
        "You got everything! Ready to go ✈"}
    </div>
  );
}

export default Footer;
