import React from 'react';

class FacebookLogout extends React.Component {
  handleFacebookLogout = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout((response) => {
          this.props.setUserLoggedInStatus(false)
        })
      }
    })
  }
  render () {
    return (
      <button disabled={!this.props.userIsLoggedIn} onClick={this.handleFacebookLogout}>Logout</button>
    )
  }
}

export default FacebookLogout