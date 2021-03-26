import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor : '#FFF'
    }
  }

//Passing the the function down to the child
  // changeColor = (e) => {
  //   this.setState({
  //     color: getRandomColor()
  //   })
  // }

//Updating changeColor() method to change the color state & ChildrenColor to practice sending data back to the parent
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor}
            color={this.state.childrenColor}/>
        <Child handleColorChange={this.changeColor}
             color={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
