import * as SQLite  from 'expo-sqlite'


 const db = SQLite.openDatabase('contactos.db')
 /*db.transaction(tx =>{
    tx.executeSql('DROP TABLE contactos')})*/
 export const init = () =>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL,telefono TEXT NOT NULL, address TEXT NOT NULL, image TEXT, lat REAL NOT NULL, lng REAL NOT NULL)',
            [],
            ()=>{resolve()},
            (_,err)=>{reject(err)})
        })
    })
    return promise
 }



 export const insertContactos = (
    name,
    telefono,
    image,
    address,
    lat,
    lng
 ) => {
    const promise = new Promise ((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO contactos (name,telefono,address,image,lat,lng) VALUES (?,?,?,?,?,?);`,
                [name,telefono,address,image,lat,lng],
                (_,result)=>{resolve(result)},
                (_,err)=>{reject(err)}
                )
        })
    })
    return promise
 }
 
 export const fechtContactos = () =>{
    const promise = new Promise ((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM contactos',
            [],
            (_,result)=>{resolve(result)},
            (_,err)=>{reject(err)})
        })
    })
    return promise
 }

 export const deletedDB = (id) =>{
    const promise = new Promise ((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('DELETE FROM contactos WHERE id = ?',
            [id],
            (_,result)=>{resolve(result)},
            (_,err)=>{reject(err)})
        })
    })
    return promise
 }