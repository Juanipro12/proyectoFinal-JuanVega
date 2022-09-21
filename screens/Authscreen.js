import React, { useState } from 'react'
import { KeyboardAvoidingView, View,Platform, TouchableOpacity, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/actions/auth.actions';

const Authscreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [islogin, setLogin] = useState(false)

    const dispatch = useDispatch()

    const title = 'REGISTRO';

    const handleSignup = () =>{
        dispatch(signup(email,password))
    }
    const handleLogin= () =>{
        dispatch(login(email,password))
    }
  return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'? 'padding': 'height'}
            style={styles.screen}
            >
                <View style={styles.container} >
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(text)=>setEmail(text)}
                        />
                    <Text style={styles.label}>Clave</Text>
                        <TextInput 
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize='none'
                        onChangeText={(text)=>setPassword(text)}
                        />
                        {
                        islogin?
                        <Button title='Ingresar' onPress={handleLogin}/>
                        :
                        <Button title='Registarme' onPress={handleSignup}/>

                        }
                    </View>
                    <View style={styles.prompt}>
                        <Text style={styles.promptMessage} >
                            {!islogin?'Ya tienes cuenta?':'No tienes cuenta?'}
                        </Text>
                        <TouchableOpacity >
                        <Text style={styles.promptButton} >
                        {
                            !islogin?
                            <Button title='Ingresar' onPress={()=>setLogin(true)}/>:
                            <Button title='Registrarte' onPress={()=>setLogin(false)}/>
                        }
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontFamily:'OpenSansBold',
        marginBottom:18,
        textAlign:'center'
    },
    container:{
        width:'80%',
        maxWidth:400,
        padding:12,
        margin:12,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'white'
    },
    prompt:{
        alignItems:'center'
    },
    promptMessage:{
        fontSize:16,
        fontFamily:'OpenSansRegular',
        color:'#333'
    },
    promptButton:{
        fontSize:16,
        fontFamily:'OpenSansBold',
        color:'black'
    },
    button:{
        backgroundColor:'black',
        marginVertical:28
    },
    inputContainer:{
        justifyContent:'space-around',
        height:'40%'
    },
    input:{
        width:'100%',
        borderBottomWidth:1.5,
        borderColor:'grey'
    }
})
export default Authscreen