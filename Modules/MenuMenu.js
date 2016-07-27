import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className='wrapper'>
        <a className='button'><Link to="/daymenu">Day Menu</Link></a>
          <a className='button'><Link to="/nightmenu">Night Menu</Link></a>
        </div>
      </div>
    )
  }
})

//
// <button className='button'><Link to="/nightmenu">Night Menu</Link></button>
// <button className='button'><Link to="/daymenu">Day Menu</Link></button>
