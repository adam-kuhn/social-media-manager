import React from 'react'
import './App.css'

class App extends React.Component {
  handleFacebookLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ')
       window.FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.')
       })
      } else {
       console.log('User cancelled login or did not fully authorize.')
      }
    }
  )}

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
      <button onClick={this.handleFacebookLogin}>Login</button>
      <button onClick={this.handleFacebookLogout}>Logout</button>
      </header>
    </div>
  );
}
}

export default App
