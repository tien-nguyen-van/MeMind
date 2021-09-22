/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Root from './src/root'
import { name as appName } from './app.json'
import { enablePromise } from 'react-native-sqlite-storage'

enablePromise(true)

AppRegistry.registerComponent(appName, () => Root)
