import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../../components/home'
import Article from '../../components/article'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/articles/:region' component={Article}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
