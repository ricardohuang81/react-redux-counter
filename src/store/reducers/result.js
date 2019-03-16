import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: Date.now(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 3;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default resultReducer;