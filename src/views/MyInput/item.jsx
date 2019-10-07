import React from "react";

const Item = props => {
  const listItems = props.list.map((item, index) => (
    <li key={item + index} onClick={props.onRemoveItem}>
      {item}
    </li>
  ));
  return <ul className="list-box">{listItems}</ul>;
};
export default Item;
