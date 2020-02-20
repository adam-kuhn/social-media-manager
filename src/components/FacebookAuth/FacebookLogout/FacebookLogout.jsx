import React from 'react';

class FacebookLogout extends React.Component {
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
      <button onClick={this.handleFacebookLogout}>Logout</button>
    )
  }
}

export default FacebookLogout