import React from 'react'


export default React.createClass({
  render() {
    return (
      <div className='menuBody'>
        <h2 className='itemName'>{this.props.item}</h2>
        <p className='itemInfo'>{this.props.info}</p>
        <p className='itemPrice'>${this.props.price}</p>
      </div>
    )
  }
})
