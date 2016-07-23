import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='navbar'>
        <header className="clearfix">
        <div className="container">
          <div className="header-left">
            <h1>Caffeine Laboratory</h1>
          </div>
          <div className="header-right">
            <label htmlFor="open">
              <span className="hidden-desktop"></span>
            </label>
            <input type="checkbox" name="" id="open" />
            <nav>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </div>
        </header>
        <section className="clearfix">
        <div className="container">
		   </div>
	     </section>
      </div>
    )
  }
})
