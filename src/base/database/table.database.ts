import { SQLiteDatabase } from 'react-native-sqlite-storage'

export const createTable = async (db: SQLiteDatabase, tableName: string) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(value TEXT NOT NULL);`
  await db.executeSql(query)
}
