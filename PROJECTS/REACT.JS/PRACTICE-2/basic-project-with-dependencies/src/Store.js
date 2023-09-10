
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './Reducer';


const middleware =[thunk]
const Store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;