import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Images } from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  }
})

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.splashImage}
        resizeMode={'cover'}
        style={styles.imageBackground}
      >
        <Text>This is</Text>
      </ImageBackground>
    </View>
  )
}

export { SplashScreen }
