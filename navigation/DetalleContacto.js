
import {  Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import {  useSelector } from "react-redux"
import MapPreview,{Marker} from 'react-native-maps'




const DetalleContacto = ({route}) =>{
    const contato = useSelector(state => (state.contactos.contactos)).filter(cont=>cont.id === route.params.id)
    console.log(contato)
    const { name,telefono,image,lat,lng,address } = contato[0]

    return (
        <ScrollView>
        <View style={styles.info}>
            <View>
            {
                    !image ? 
                    <Image style={styles.image} source={require('../constants/fotoPerfilDefault.png')}/>:
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                        />

                }
            </View>
            <View style={{width: 150, margin:50 }}>
            <Text style={styles.label} >Nombre</Text>
            <Text style={styles.label} >{name}</Text>
            <Text style={styles.label} >Telefono</Text>
            <Text style={styles.label} >{telefono}</Text>
            
            </View>
            
        </View>
        <View style={{margin:40}}>

        <MapPreview region={{latitude:lat,longitude:lng,latitudeDelta:0.0005,longitudeDelta:0.0005}} style={styles.preview} >
        <Marker title='Ubicacion' coordinate={{
                    latitude:lat,
                    longitude:lng
                }} />
        </MapPreview>
        <Text style={{...styles.label,textAlign:'center'}} >{address}</Text>
        </View>
        </ScrollView>
    )
}
export default DetalleContacto
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:16,
    },
    error:{
        fontSize:15,
        color:'red'
    },
    input:{
        borderBottomColor:'#black',
        borderBottomWidth:1,
        marginBottom:16
    },
    info:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30
    },
    preview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'blue',
        borderWidth:1
    },
    image:{
        height:120,
        width:120,
        borderRadius:100,
        borderWidth:5,
        borderColor:'#48B920'
    }
})