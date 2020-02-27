import React from 'react';
import {useHistory} from 'react-router-dom'

const FacebookLogout = (props) => {
  const history = useHistory()
  const handleFacebookLogout = () => {
    // Used so I don't have to connect to Facebook SDK using ngrok
    // for when I'm lazy and just testing non FB functionality
    const devLogin = true
    if (devLogin) history.push('/') 
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        window.FB.logout((response) => {
          history.push('/')
        })
      }
    })
  }
  return (
    <button onClick={handleFacebookLogout}>Logout</button>
  )
}

export default FacebookLogout
