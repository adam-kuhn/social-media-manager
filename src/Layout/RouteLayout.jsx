import React from 'react'
import {Route} from'react-router-dom'
import LandingPage from '../views/LandingPage/LandingPage'

const RouteLayout = () => (
  <Route exact path="/" component={LandingPage} />
)

export default RouteLayout