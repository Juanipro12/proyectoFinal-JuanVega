import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/Auth.reducer";
import contactosReducer from "./reducers/contacto.reducer";



const RootReducer = combineReducers({
    auth:AuthReducer,
    login:AuthReducer,
    contactos:contactosReducer,
})


export default createStore(RootReducer,applyMiddleware(thunk))