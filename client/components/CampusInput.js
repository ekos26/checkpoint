/* eslint react/no-unused-state:0 */
import React, { Component } from 'react';

export default class CampusInput extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //your code here
  handleChange(event) {
    this.setState({
      name: event.target.value
    }) 
    console.log('name',event.target.name)
    console.log('value', event.target.value)
  }

  render() {
    //your code here
    return(
    <input onChange = {this.handleChange} />
    )
    
  }
}
