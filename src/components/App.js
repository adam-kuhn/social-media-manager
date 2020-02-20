import React from 'react'
import FacebookAuth from './FacebookAuth/FacebookAuth'
import './App.css'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Social Media Manager</h2>
      <FacebookAuth />
      </header>
    </div>
  )
}

export default App
