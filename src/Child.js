import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  
  state = {
    color: getRandomColor()
  }
  render() {
    console.log(this.props)
    return (
      <div onClick={ () => this.props.handleColorChange(getRandomColor())}
        className="child" 
        style={{backgroundColor: this.props.color}}> Color Change
      </div>
    )
  }
}

export default Child

// Replaced style={{backgroundColor: "#FFF"}} color with this.props.color since the name of the props passed in to the <Child /> is `color={this.state.childrenColor}`