import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className='wrapper'>
          <button className='button'><Link to="/nightmenu">Night Menu</Link></button>
          <button className='button'><Link to="/daymenu">Day Menu</Link></button>
        </div>
      </div>
    )
  }
})
