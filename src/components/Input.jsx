import React from 'react'

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'What can I do for you ?😄'
    }
  }
  render() {
    return (
      <div className="Input-container">
        <input 
        ref="txt"
        type="text" 
        style={{width:'50%'}}  
        value={this.state.msg} 
        // onChange={(e) => {this.changeInputValue(e)}}
        onChange={this.changeInputValue}
        />
        <h3>{this.state.msg}</h3>
      </div>
    )
  }
  changeInputValue = (e) => {
    // console.log(e.target);
    this.setState({
      // msg: e.target.value
      msg: this.refs.txt.value
    })
  }
}

export default Input