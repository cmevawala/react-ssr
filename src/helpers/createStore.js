import { creteStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';

export default () => {
    return createStore(reducers, {}, applyMiddleWare(thunk));
}