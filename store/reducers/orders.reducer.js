import { DELETE_ORDER, GET_ORDERS } from "../actions/order.action"


const initialState = {
    list:[]
}

const OrderReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_ORDERS : 
        return {
            ...state,
            list: action.payload
        }
        case DELETE_ORDER:
        return {
            ...state,
            list: list.filter((item) => item.id !== action.orderID)
        }
        default:
            return state
    }
}
export default OrderReducer