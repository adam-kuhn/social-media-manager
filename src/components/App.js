import React from 'react'
import FacebookLogin from './FacebookLogin/FacebookLogin'
import './App.css'


class App extends React.Component {
  handleFacebookLogout = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        console.log('conne')
        window.FB.logout(function(response) {
          console.log(response)
        })
      }
    })
  }

render () {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Social Media Manager</h2>
      <FacebookLogin />
      <button onClick={this.handleFacebookLogout}>Logout</button>
      </header>
    </div>
  );
}
}

export default App
