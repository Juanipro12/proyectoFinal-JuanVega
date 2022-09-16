import * as SQLite  from 'expo-sqlite'


 const db = SQLite.openDatabase('address2.db')

 export const init = () =>{

    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
            [],
            ()=>{resolve()},
            (_,err)=>{reject(err)})
        })
    })
    return promise
 }



 export const insertAddres = (
    title,
    image,
    address,
    lat,
    lng
 ) => {
    const promise = new Promise ((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO address (title,address,image,lat,lng) VALUES (?,?,?,?,?);`,
                [title,address,image,lat,lng],
                (_,result)=>{resolve(result)},
                (_,err)=>{reject(err)}
                )
        })
    })
    return promise
 }
 
 export const fechtAddress = () =>{
    const promise = new Promise ((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM address',
            [],
            (_,result)=>{resolve(result)},
            (_,err)=>{reject(err)})
        })
    })
    return promise
 }