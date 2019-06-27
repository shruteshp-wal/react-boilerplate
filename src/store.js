import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));

export default store;