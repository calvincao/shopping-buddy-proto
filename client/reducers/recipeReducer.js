import * as types from '../actions/constants.js';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.FETCH_RECIPES_SUCCESS: {
      const updatedList = [...action.payload];
      return {
        ...state,
        loading: false,
        list: updatedList,
      };
    }

    case types.FETCH_RECIPES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default recipeReducer;
