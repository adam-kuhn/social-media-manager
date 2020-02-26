import React from 'react';
import {useHistory} from 'react-router-dom'

const FacebookLogout = (props) => {
  const history = useHistory()
  const handleFacebookLogout = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout((response) => {
          props.setUserLoggedInStatus(false)
          history.push('/')
        })
      }
    })
  }
  // Used so I don't have to connect to Facebook SDK using ngrok
  // for when I'm lazy and just testing non FB functionality
  const developmentLogout = () => {
    props.setUserLoggedInStatus(false)
    history.push('/')
  }
    return (
      <button disabled={!props.userIsLoggedIn} onClick={developmentLogout}>Logout</button>
    )
}

export default FacebookLogout