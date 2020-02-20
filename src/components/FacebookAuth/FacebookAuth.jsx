import React from 'react'
import FacebookLogin from './FacebookLogin/FacebookLogin'
import FacebookLogout from './FacebookLogout/FacebookLogout'

class FacebookAuth extends React.Component {
  constructor () {
    super() 
    this.state = {
      userIsLoggedIn: false
    }
  }
  componentDidMount() {
    // check logged in state
    // disable login/logout based on logged in state
  }
  render () {
    return (
      <div>
        <FacebookLogin userIsLoggedIn={this.state.userIsLoggedIn} />
        <FacebookLogout userIsLoggedIn={this.state.userIsLoggedOut} />
      </div>
    )
  }
}

export default FacebookAuth
