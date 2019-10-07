import { message } from "antd";
const defaultState = {
  list: ["吃饭", "喝水", "睡觉"],
  todo: ""
};
export default (state = defaultState, action) => {
  if (action.type === "changeValue") {
    // 深拷贝state
    let newState = JSON.parse(JSON.stringify(state));
    newState.todo = action.value;
    return newState;
  }
  if (action.type === "addItem") {
    // 深拷贝state
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.todo) {
      newState.list.push(newState.todo);
      newState.todo = "";
    } else {
      message.warning("空空如也。。。");
    }
    return newState;
  }
  if (action.type === "removeItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
