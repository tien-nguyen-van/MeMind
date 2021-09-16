/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import messaging from '@react-native-firebase/messaging'
import { View, Text, Alert } from 'react-native'

console.log('#################################################################')

const App = () => {
  React.useEffect(() => {
    const checkPermission = async () => {
      const enable = await messaging().hasPermission()
      console.log(enable)
    }
    checkPermission()
    messaging()
      .getToken()
      .then(token => console.log(token))
      .catch(e => console.log(e))
    return messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
    })
  }, [])

  return (
    <View>
      <Text>Welcome tiennv</Text>
    </View>
  )
}

export default App
