import SQLite from 'react-native-sqlite-storage';
export default class LocalDB {
    connect(){
        return SQLite.openDatabase({name: 'inventario'});
    }
}