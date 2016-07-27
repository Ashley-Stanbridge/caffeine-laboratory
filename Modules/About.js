import React from 'react'
import Nav from './Nav'
import Open from './Open'


export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1604.805117275603!2d172.6388979693573!3d-43.53023607926822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81a906da77b82579!2sThe+Caffeine+Laboratory!5e0!3m2!1sen!2snz!4v1469598525633" width="700" height="550" frameBorder="0" className='map'></iframe>
          <div className='openHours'>
            <Open day='Monday' open='Closed' />
            <Open day='Tuesday' open='7:30' close='4:00' className='hours' />
            <Open day='Wedesday' open='7:30' close='4:00'  className='hours' />
            <Open day='Wedesday' open='7:30' close='4:00' className='hours' />
            <Open day='Thursday' open='7:30' close='4:00'  className='hours'/>
            <Open day='Friday' open='7:30' close='Late' className='hours' />
            <Open day='Saturday' open='7:30' close='Late' className='hours' />
            <Open day='Sunday' open='7:30' close='Late' className='hours' />


          </div>
      </div>
    )
  }
})
