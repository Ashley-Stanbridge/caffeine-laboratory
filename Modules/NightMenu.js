import React from 'react'
import Nav from './Nav'
import MenuMenu from './MenuMenu'


export default React.createClass({
  render() {
    return (
      <div className='menuBody'>
        <Nav />
        <MenuMenu />
        <p>Menu</p>
      </div>
    )
  }
})
