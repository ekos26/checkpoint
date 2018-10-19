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
    [event.target.name] = event.target.value
  }

  render() {
    //your code here
    <input onChange = {this.handleChange} />
    
    return null;
  }
}
