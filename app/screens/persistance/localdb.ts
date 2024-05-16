import SQLite from 'react-native-sqlite-storage';

export default class localDB {
  static connect() {
    return SQLite.openDatabase({name: 'inventario'});
  }
  static async init() {
    const db = await localDB.connect();
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS productos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre VARCHAR(64) NOT NULL,
          precio DECIMAL(10,2) NOT NULL DEFAULT 0.0, 
          minStock INTEGER NOT NULL DEFAULT 0,
          currentStock INTEGER NOT NULL DEFAULT 0,
          maxStock INTEGER NOT NULL DEFAULT 0
        );`,
        [],
        () => console.log('CREATED TABLE productos'),
        error => console.error({error}), // Error no necesita estar entre llaves
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS movimientos (
          id_movimiento INTEGER PRIMARY KEY AUTOINCREMENT,
          id_producto INTEGER NOT NULL,
          id_producto INTEGER NOT NULL,
          fecha_hora DATATIME NOT NULL,
          cantidad INTEGER NOT NULL
        );`,
        [],
        () => console.log('CREATED TABLE movimientos'),
        error => console.error({error}), // Error no necesita estar entre llaves
      );


    });
  }
}


