import React, { Component, FormControl } from 'react'

export default class Calc extends Component {

  render() {
    return (
      <div><option value="placeholder">Choose eatery type...</option>
      <option value="cafe">Cafe</option>
      <option value="bakery">Bakery</option>
      <option value="pizza">Pizza store</option>
      <option value="sushi">Sushi store</option>
      <option value="buffet">Buffet</option>
      <option value="donut">Donut store</option>
      <option value="other">Other</option></div>
    )
  }
}

