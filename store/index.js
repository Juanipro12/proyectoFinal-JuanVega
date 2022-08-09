import { combineReducers, createStore } from "redux";
import BreadsReducer from "./reducers/breads.reducer";
import CategoryReduce from "./reducers/category.reducer";


const RootReducer = combineReducers({
    categories : CategoryReduce,
    breads:BreadsReducer
})

export default createStore(RootReducer)