import React from "react";

// export default function TodoItems(props) {
//   const entries = props.entries;
//   const deleteItem = props.deleteItem;
export default function TodoItems({entries, deleteItem}) { // destructuring input props

  return (
    <ul className="mt-3">
      <b className="ms-3">Items:</b>
      { // curly braces to write JS code for a loop to display list items
          entries.map(({id, text}) => {
              return (
                  <li
                      className="px-2 mt-1 mb-1 ms-2"
                      key={id}
                      onClick={() => {
                          deleteItem(id);
                      }}
                  >
                      {text}
                  </li>
              );
          })
      }
    </ul>
  );
}
