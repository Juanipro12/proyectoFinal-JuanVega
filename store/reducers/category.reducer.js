import { CATEGORIE } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    categories : CATEGORIE,
    selected: null
}

const CategoryReduce = ( state = initialState, action ) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if(IndexCategory === 2) return state
            return {...state, selected: state.categories[IndexCategory]}
        default: 
            return state
    }
}

export default CategoryReduce