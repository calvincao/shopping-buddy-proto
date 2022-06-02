import * as types from '../actions/actionTypes.js';

const initialState = {
  title: 'My Shopping List',
  grocery: [{ name: 'ground pork', done: false, ID: 999 }],
  recipe: [],
  lastID: 0,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ADD: {
      const updatedList = [
        ...state.grocery,
        { name: action.payload, done: false, ID: state.lastID },
      ];
      return {
        ...state,
        lastID: state.lastID + 1,
        grocery: updatedList,
      };
    }

    case types.LIST_REMOVE: {
      const updatedList = state.grocery.filter((item) => item.ID !== Number(action.payload));
      return {
        ...state,
        grocery: updatedList,
      };
    }

    case types.TOGGLE_DONE: {
      const updatedList = state.grocery.map((item) => {
        if (item.ID === Number(action.payload))
          return {
            ...item,
            done: !item.done,
          };
        else return item;
      });
      return {
        ...state,
        grocery: updatedList,
      };
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
