import React from 'react'


export default React.createClass({
  render() {
    return (
      <div className='menuBody'>
        <h2 className='day'>{this.props.day}</h2>
        <p className='oepn'>{this.props.open} - {this.props.close}</p>
      </div>
    )
  }
})
