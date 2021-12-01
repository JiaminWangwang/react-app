import { createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

import courseTabListReducer from './reducers/courseTabList';

import courseTabListState from './states/courseTabList';

const allReducers = combineReducers({
    courseTabList: courseTabListReducer
})

// 通过createStore创建的store自带dispatch
const store = createStore(
    allReducers, 
    {courseTabList: courseTabListState}, 
    applyMiddleware(ReduxThunk)
);

export default store;