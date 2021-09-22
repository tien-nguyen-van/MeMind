import { openDatabase } from 'react-native-sqlite-storage'

export const getDBConnection = () => {
  return openDatabase({ name: 'remin.db', location: 'default' })
}
