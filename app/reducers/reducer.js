import {CART_COMPLETE} from '../actions/actions';
import {combineReducers} from 'redux';

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_COMPLETE:
      return {
        ...state,
        cart: action.response,
      };
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
