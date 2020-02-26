import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import FacebookAuth from './FacebookAuth/FacebookAuth'
import RouteLayout from '../Layout/RouteLayout'
import './App.css'


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <RouteLayout />
        <FacebookAuth />
        </header>
      </div>
    </Router>
  )
}

export default App
