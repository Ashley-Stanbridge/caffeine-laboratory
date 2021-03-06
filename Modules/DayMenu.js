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
      <div className='itemsLeft'>
        <h1>Breakfast</h1>
        <MenuItem item='Toast With Spreads' info='Served with butter and your choice of spreads' price='10' className='menuItem' />
        <MenuItem item='Eggs Your Way' info='Free range with toast' price='10' className='menuItem' />
        <MenuItem item='Toast With Spreads' info='Served with butter and your choice of spreads' price='10' className='menuItem' />
        <MenuItem item='Porridge' info='Cooked in kaffir lime & vanilla coconut milk with rhubarb & a pistachio brittle' price='15' className='menuItem' />
        <MenuItem item='Breakfast Burger' info='With refried beans chipotle bacon, greens, fried egg and relish' price='15' className='menuItem' />
        <MenuItem item='Beans' info='Spiced beans with poached eggs, smoked paprika creme fraiche & toast' price='18' className='menuItem' />
        <MenuItem item='Hot Cakes' info='Raspberry & lime mascarpone, vanilla marshmellow and a citrus curd' price='19' className='menuItem' />
        <MenuItem item='Smoked Salmon' info='Roast baby beets, sorrel, walnuts, honey lemon & sumac dressing & horseradish cream' price='20' className='menuItem' />
        <MenuItem item='Creamy Mushroom' info='Smoked mushrooms, creamy tarragon sauce, micros, roast hazelnuts with grain toast' price='19' className='menuItem' />
        <MenuItem item='Baked Omelette' info='Seasonal veges, dressed greens and feta' price='19' className='menuItem' />
        <MenuItem item='Scrambled Tofu' info='Wilted spinach, smoked mushrooms, sassy sauce & toasted cashews' price='19' className='menuItem' />
      </div>
      <div className='itemsRight'>
        <h1>Lunch</h1>
        <MenuItem item='Soup' info='Served with crusty bread and cafe de paris butter' price='15'/>
        <MenuItem item='Pan Fried Fish' info='Wiltedgreens, red curry sauce, spiced peanuts and coriander' price='21'/>
        <MenuItem item='Mushroom Risotto' info='Braised lamb sholder, gremolata' price='20'/>
        <MenuItem item='Goat Cheese & Caramelised Onion Tart' info='Pear & date chutney, walnuts, rocket salad' price='18'/>
        <MenuItem item='Beef Burger' info='Beef rump patty, caramelised onion, cheese, cress and mustard mayo with chips' price='15'/>
      </div>
      </div>
    )
  }
})


// </div>
// <div className='itemsRight'>
