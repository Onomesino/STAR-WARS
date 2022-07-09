import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(){
        super()
        this.state={number:2};
    }
    increament=()=>{
        this.setState({number: this.state.number+2})
    }
    Decreament=()=>{
        this.setState({number: this.state.number-2})
    }
  render() {
    return (
      <>
      <h1>COUNT {this.state.number}</h1>
      <button onClick={this.increament}>Increase</button>
      <button onClick={this.Decreament}>Decrease</button>
      </>
    )
  }
}
export default ClassCounter
