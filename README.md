**Social Media Manager**
Aim of this app is to integrate with various social media platforms so that a user can create posts in one spot and at desired intervals.

First aim is to integrate with Facebook and allow the user to create a post from this application.
Posting to Facebook:
* user should be able to create a post to facebook
* user should be able to set a time of posting to facebook, so that the post is delivered in the future
* user should be able to queue up a number of posts at once, specify the time they should be posted.

Development notes
* Facebook Login requires HTTPS. I'm using ngrok to be a forwarding mask for localhost.
* After starting up ngrok make sure that the Facebook App accepts OAuth redirects from the ngrok address (as the Facebook App is under my account and required permissions, you will ne be able to use this app I'm building)
* Command to set up ngrok `ngrok http -bind-tls=true localhost:3001`
* CRA does not support secure websocket by default, there should be an updated to react-dev-utils soon. But if the ngrok address fails with `websocket not secure` go to `node_modules/react-dev-utils/webpackHotDevClient.js` and change ```protocol: 'ws'``` to ```protocol: window.location.protocol === 'https:' ? 'wss' : 'ws' ```. 