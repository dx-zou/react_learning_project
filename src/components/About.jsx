import React from 'react'
export default class About extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    console.log(this.props);
    console.log(this.props.match.params);
    
    return (
      <div className="About-container">
        
        <h1>this is about Component</h1>
      </div>
    )
  }
}