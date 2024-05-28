import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const getDatabase = async () => {
  return SQLite.openDatabase({ name: 'car_batteries.db', location: 'default' });
};

export const initializeDatabase = async () => {
  const db = await getDatabase();
  await db.executeSql(
    'CREATE TABLE IF NOT EXISTS Batteries (id INTEGER PRIMARY KEY NOT NULL, make TEXT, model TEXT, battery TEXT);'
  );
};

const searchBattery = async (make, model) => {
  try {
    const db = await getDatabase();
    const [results] = await db.executeSql(
      'SELECT battery FROM Batteries WHERE make = ? AND model = ? LIMIT 1',
      [make, model]
    );

    if (results.rows.length > 0) {
      return results.rows.item(0).battery;
    } else {
      return 'Batería no encontrada';
    }
  } catch (error) {
    console.error('Error searching for battery:', error);
    return 'Error al buscar la batería';
  }
};

export default searchBattery;
