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
    document.addEventListener('FBObjectReady', this.initalizeFacebookLogin)
  }
  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initalizeFacebookLogin)
  }
  initalizeFacebookLogin = () => {
    this.FB = window.FB
    this.checkLoginStatus()
    this.setState({disableLogin: false})
  }
  checkLoginStatus = () => {
    this.FB.getLoginStatus(response => {
      const userLoggedInStatus = response.status === 'connected'
      this.setUserLoggedInStatus(userLoggedInStatus);
    })
  }
  setUserLoggedInStatus = (userStatus) => {
    this.setState({
      userIsLoggedIn: userStatus
    })
  }
  render () {
    return (
      <div>
        <FacebookLogin userIsLoggedIn={this.state.userIsLoggedIn} setUserLoggedInStatus={this.setUserLoggedInStatus}/>
        <FacebookLogout userIsLoggedIn={this.state.userIsLoggedIn} setUserLoggedInStatus={this.setUserLoggedInStatus}/>
      </div>
    )
  }
}

export default FacebookAuth
