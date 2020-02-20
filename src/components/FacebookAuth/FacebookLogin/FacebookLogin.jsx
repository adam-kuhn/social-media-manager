import React from 'react'
class FacebookLogin extends React.Component {

  facebookLoginHandler = () => {
    if (window.FB) {
      window.FB.login(response => {
        if (response.authResponse) {
         window.FB.api('/me', response => { // remove response if not intending to us it
           this.props.setUserLoggedInStatus(true)
         })
        } else {
         console.log('User cancelled login or did not fully authorize.')
        }
      })
    }
  }
  render () {
    return (
      <button disabled={this.props.userIsLoggedIn} onClick={this.facebookLoginHandler}>Login to Facebook</button>
    )
  }
}

export default FacebookLogin