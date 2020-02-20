import React from 'react'
//TO DO correctly disable login/logout disabling
class FacebookLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      disableLogin: true
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
      if (response.status === 'connected') {
        console.log('U R LOGGED IN')
      } else {
        console.log('you are not logged in')
      }
    })
  }
  facebookLoginHandler = () => {
    if (this.FB) {
      this.FB.login(response => {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ')
         this.FB.api('/me', response => {
           console.log('Good to see you, ' + response.name + '.')
         })
        } else {
         console.log('User cancelled login or did not fully authorize.')
        }
      })
    }
  }
  render () {
    return (
      <button disabled={this.state.disableLogin} onClick={this.facebookLoginHandler}>Login to Facebook</button>
    )
  }
}

export default FacebookLogin