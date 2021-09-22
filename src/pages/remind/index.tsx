import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { MemindThemeContext } from '../../base/singleton'
// import { getDBConnection } from '../../base/database/db.database'

const RemindScreen = (): React.ReactElement => {
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
      <Button
        onPress={() => {
          memindThemeContext.setBackground('#asdkdsaj')
        }}
        title={'Click'}
      />
    </View>
  )
}

export { RemindScreen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
