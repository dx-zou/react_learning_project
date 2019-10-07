import React from "react";
import { Input, Button } from "antd";
import Item from "./item";
import { connect } from "react-redux";
class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    const {
      todo,
      changeInputValue,
      addTodoItem,
      list,
      removeTodoItem
    } = this.props;
    return (
      <div className="Input-container">
        <Input
          size="large"
          ref={this.inputRef}
          value={todo}
          style={{ width: "50%" }}
          onChange={changeInputValue}
          placeholder="what are you going to do ?"
        />
        <Button
          type="primary"
          size="large"
          className="my-button"
          onClick={addTodoItem}
        >
          添加
        </Button>
        <Item list={list} onRemoveItem={removeTodoItem} />
      </div>
    );
  }
}
const stateProps = state => {
  return {
    list: state.list,
    todo: state.todo
  };
};
const mapStateToProps = dispatch => {
  return {
    changeInputValue(e) {
      let action = {
        type: "changeValue",
        value: e.target.value
      };
      dispatch(action);
    },
    addTodoItem() {
      let action = {
        type: "addItem"
      };
      dispatch(action);
    },
    removeTodoItem(index) {
      let action = {
        type: "removeItem",
        index
      };
      dispatch(action);
    }
  };
};
export default connect(
  stateProps,
  mapStateToProps
)(MyInput);
