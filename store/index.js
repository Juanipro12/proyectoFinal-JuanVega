import { applyMiddleware, combineReducers, createStore } from "redux";
import BreadsReducer from "./reducers/breads.reducer";
import CategoryReduce from "./reducers/category.reducer";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";



const RootReducer = combineReducers({
    categories : CategoryReduce,
    breads:BreadsReducer,
    cart:CartReducer
})


export default createStore(RootReducer,applyMiddleware(thunk))