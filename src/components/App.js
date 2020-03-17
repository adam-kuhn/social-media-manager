import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import RouteLayout from '../Layout/RouteLayout'
import './App.css'


const App = () =>  (
    <Router>
      <div className="App">
        <header className="App-header">
        <RouteLayout />
        </header>
      </div>
    </Router>
  )

export default App
