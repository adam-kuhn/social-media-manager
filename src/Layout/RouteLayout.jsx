import React from 'react'
import {Route} from'react-router-dom'
import LandingPage from '../views/LandingPage/LandingPage'
import AppMain from '../views/AppMain/AppMain'

const RouteLayout = () => (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/main" component={AppMain} />
  </div>
)

export default RouteLayout