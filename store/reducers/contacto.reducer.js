import { ADD_CONTACTO, DELETE_CONTACTO, LOAD_CONTACTOS } from "../actions/contacto.action"


const initialState = {
    contactos:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_CONTACTO:
            const newContacto= {
                                id:action.payload.id.toString(),
                                name:action.payload.name,
                                telefono:action.payload.telefono,
                                image:action.payload.image,
                                address: action.payload.address,
                                lat: action.payload.coords.lat,
                                lng: action.payload.coords.lng
                            }
            return{
                contactos: [...state.contactos.contactos,newContacto]
            }
        case LOAD_CONTACTOS:
            return{
                ...state,
                contactos:action.contactos.map(item=>(
                    {
                        id:item.id.toString(),
                        name: item.name,
                        telefono: item.telefono,
                        image: item.image,
                        address: item.address,
                        lat: item.lat,
                        lng:item.lng
                    }
                ))
            }
        case DELETE_CONTACTO:
            const newContactosList = []
            state.contactos.forEach(element => {
                if(element.id != action.contacto)
                newContactosList.push(element)
            });
            console.log(newContactosList)
            return{
                contactos: [...newContactosList]
            }
        default:
            return state
    }
}

