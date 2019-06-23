import React from "react";
export default class Item extends React.Component {
  removeItem = () => {
    this.props.onRemoveItem();
  };
  render() {
    const listItems = this.props.list.map((item, index) => (
      <li key={item + index}>{item}</li>
    ));
    return (
      <ul className="list-box" onClick={this.removeItem}>
        {listItems}
      </ul>
    );
  }
}
