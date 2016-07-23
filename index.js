import {Router, Route, hashHistory} from 'react-router'
import About from './Modules/About'
import { render } from 'react-dom'
import Menu from './Modules/Menu'
import App from './Modules/App'
import DayMenu from './Modules/DayMenu.js'
import NightMenu from './Modules/NightMenu.js'
import React from 'react'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/menu" component={Menu}/>
    <Route path="/about" component={About}/>
    <Route path="/daymenu" component={DayMenu}/>
    <Route path="/nightmenu" component={NightMenu}/>

  </Router>
), document.getElementById('app'))
