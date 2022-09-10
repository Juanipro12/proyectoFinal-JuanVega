import { ADD_PLACE } from "../actions/place.action"


const initialState = {
    places:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            const newPlace= {
                                id:Date.now(),
                                title:action.payload.title,
                                image:action.payload.image,
                                address: action.payload.address,
                                lat: action.payload.lat,
                                lng: action.payload.lng
                            }
            return{
                places: [...state.places,newPlace]
            }
        default:
            return state
    }
}