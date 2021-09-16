/**
 * @format
 */

import { AppRegistry } from 'react-native'
import React from 'react'
import App from './App'
import { name as appName } from './app.json'
import messaging from '@react-native-firebase/messaging'

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage)
})

const headlessCheck = ({ isHeadless }) => {
  if (isHeadless) {
    // App has been launched in the background by iOS, don't render
    return null
  }

  return <App />
}

AppRegistry.registerComponent(appName, () => headlessCheck)
