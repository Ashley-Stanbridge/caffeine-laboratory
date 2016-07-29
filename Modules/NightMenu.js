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
        <h1>Burgers</h1>
        <MenuItem item='Beef' info='Beef patty, caramelised onion, cheese, cress and mustard mayo' price='14' className='menuItem' />
        <MenuItem item='Chicken' info='Spiced fried chicken, red onion & carrot pickl, siracha mayo, grilled pineapple' price='14' className='menuItem' />
        <MenuItem item='Quinoa' info='Quinoa patty, basil pesto, smoked mushroom, cheese, rocker, aioli and relish' price='14' className='menuItem' />
        <MenuItem item='Pork' info='Chipotle pulled pork, burbon bbq sauce, slaw and aioli' price='14' className='menuItem' />
        <MenuItem item='Lamb' info='Moroccan lamb patty, harissa, baba-ganoush and lettuce' price='14' className='menuItem' />
        <MenuItem item='Fish' info='Pan fried fish dipped in red coconut curry, lettuce, thai slaw' price='18' className='menuItem' />
      </div>
      <div className='itemsRight'>
        <h1>Sharing plates</h1>
        <MenuItem item='Profiterole' info='Goat cheese stuffed profiterole, blueberry sauce, and spicy almonds' price='10'/>
        <MenuItem item='Chicken Wings' info='Buffalo chicken wings, spicy sauce and blue cheese dressing' price='10'/>
        <MenuItem item='Braised Lamb' info='Braised Lamb, beans, breadcrumbs and parmesan crust' price='12'/>
        <MenuItem item='Charred Vegetables' info='Charred cauliflower, broccoli and bacon, coated with mornay sauce and gremolata' price='10'/>
        <MenuItem item='Fish Bites' info='Tempura fish bites, aioli and relish' price='12'/>
        <MenuItem item='Arancini' info='Arborio rice balls, stuffed with pumpkin and blue cheese, smoked paprika creme fraiche' price='12'/>
      </div>
      </div>
    )
  }
})


// </div>
// <div className='itemsRight'>
