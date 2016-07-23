import React from 'react'
import Nav from './Nav'
import MenuMenu from './MenuMenu'
import MenuItem from './MenuItem'


export default React.createClass({
  render() {
    return (
      <div className='menuBody'>
        <Nav />
        <MenuMenu />
        <MenuItem item='Toast With Spreads' info='Served with butter and your choice of spreads' price='10' />
        <MenuItem item='Eggs Your Way' info='Free range with toast' price='10' />
        <MenuItem item='Toast With Spreads' info='Served with butter and your choice of spreads' price='10' />
        <MenuItem item='Porridge' info='Cooked in kaffir lime & vanilla coconut milk with rhubarb & a pistachio brittle' price='15' />
        <MenuItem item='Breakfast Burger' info='With refried beans chipotle bacon, greens, fried egg and relish' price='15' />
        <MenuItem item='Beans' info='Spiced beans with poached eggs, smoked paprika creme fraiche & toast' price='18' />
        <MenuItem item='Hot Cakes' info='Raspberry & lime mascarpone, vanilla marshmellow and a citrus curd' price='19' />
        <MenuItem item='Smoked Salmon' info='Roast baby beets, sorrel, walnuts, honey lemon & sumac dressing & horseradish cream' price='20' />
        <MenuItem item='Toast With Spreads' info='Served with butter and your choice of spreads' price='10' />
      </div>
    )
  }
})
