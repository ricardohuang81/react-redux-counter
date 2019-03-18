import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(
      result => result.id !== action.resultElementId
    );
    return updateObject(state, { results: updatedArray });
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // Change data
            return updateObject(state, {
              results: state.results.concat({
                id: Date.now(),
                value: action.result * 2
              })
            });
        case actionTypes.DELETE_RESULT:
            // const id = 3;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            return deleteResult(state, action);
            
        default:
            return state;
    }
}

export default resultReducer;