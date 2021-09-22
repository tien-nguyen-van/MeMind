import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { MemindThemeContext } from '../../base/singleton'
// import { getDBConnection } from '../../base/database/db.database'

const SettingScreen = (): React.ReactElement => {
  const memindThemeContext = React.useContext(MemindThemeContext)
  // const loadDataCallBack = React.useCallback(async () => {
  //   try {
  //     const db = await getDBConnection()
  //     console.log(db)
  //   } catch (error: any) {
  //     console.log(error)
  //   }
  // }, [])
  // console.log(loadDataCallBack)
  return (
    <View style={styles.container}>
      <Text h1>Remind Screen</Text>
      <Text h2>{memindThemeContext.background}</Text>
    </View>
  )
}

export { SettingScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
