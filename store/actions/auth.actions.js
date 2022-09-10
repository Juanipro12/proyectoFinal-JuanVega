import {  LOGIN_URI, REGISTER } from "../../constants/DataBase"




export const SIGNUP = 'SIGNUP'

export const LOGIN = 'LOGIN'

export const signup = (email,password) =>{
    return async dispatch =>{
        const response = await fetch(REGISTER,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
            })
        })
        const data = await response.json()
        
        dispatch({
            type:SIGNUP,
            token:data.idToken,
            userId:data.localId
        })
    }
}
export const login = (email,password) =>{
    return async dispatch =>{
        const response = await fetch(LOGIN_URI,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password,
                returnSecureToken:true
            })
        })
        const data = await response.json()
       
        dispatch({
            type:LOGIN,
            token:data.idToken,
            userId:data.localId
        })
    }
}
