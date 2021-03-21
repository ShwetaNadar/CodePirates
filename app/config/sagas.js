import {SHOW_CART} from '../actions/actions';
import {CART_COMPLETE} from '../actions/actions';
import api from './API';
import {takeEvery, call, put, select} from 'redux-saga/effects';
import {useSelector} from 'react-redux';

const getcart = () =>
  api
    .get('/')
    .then(({data}) => data)
    .catch(err => ({
      type: 'info',
      heading: 'Info',
      _error: 'Network Error! Please try again after sometime',
    }));

function* showCart(action) {
  try {
    // let userID = action.userID;
    const response = yield call(getcart);

    if (response._error) {
      // yield call(action.reject, { ...response });
      console.log('Errorrrrrrrrr');
    } else {
      //   yield call(action.resolve);
      yield put({type: CART_COMPLETE, response: response});
      console.log(response);
    }
  } catch (e) {
    console.log('Error!', e);
  }
}

export default function* rootSaga() {
  yield takeEvery(SHOW_CART, showCart);
}
