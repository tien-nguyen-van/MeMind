import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { App } from './app'

const Root = () => {
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <App />
    </SafeAreaProvider>
  )
}

export default Root
