import { BREADS } from "../../data/breads";
import { FILTERED_BREAD, SELECT_BREAD } from "../actions/bread.action";


const initialState = {
    breads: BREADS,
    filterBread: [],
    selected: null
}

const BreadsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case SELECT_BREAD:
            return {
                ...state,
                selected: state.breads.find(bread=> bread.id === action.breadID)
            }
        case FILTERED_BREAD:
            return{
                ...state,
                filterBread: state.breads.filter(bread => bread.category === action.categoryID)
            }
        default: return state
    }
}

export default BreadsReducer