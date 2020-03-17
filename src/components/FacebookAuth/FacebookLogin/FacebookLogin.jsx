import React from 'react'
import {useHistory} from 'react-router-dom'

const FacebookLogin = (props) => {
  const history = useHistory()
  const facebookLoginHandler = () => {
    // Used so I don't have to connect to Facebook SDK using ngrok
    // for when I'm lazy and just testing non FB functionality
    const devLogin = false
    if (devLogin) history.push('/main')
    else {
      if (window.FB) {
        window.FB.login(response => {
          if (response.status === 'connected') {
            history.push('/main')
            // get info about person logged in and something with it
            window.FB.api('/me', response => { // remove response if not intending to us it
            })
          } else {
            alert('Facebook authorization failed')
            console.log('User cancelled login or did not fully authorize.')
          }
        })
      } else {
        alert('Hang on, while we connect to Facebook...')
      }
    }
  }
  return (
    <button onClick={facebookLoginHandler}>Login to Facebook</button>
  )
}

export default FacebookLogin
