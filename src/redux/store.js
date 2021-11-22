
import moduleName from 'module'
import { VIDEO_SUMMARY_REQUEST, VIDEO_SUMMARY_SUCCESS, VIDEO_SUMMARY_FAIL } from "../ActionTypes"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { summaryReducer } from '../redux/reducers/videoReducer'



const middleware = [thunk]
const reducer = combineReducers({
    summaryReducer: summaryReducer
})

const summaryFromLocalStorage = localStorage.getItem('summary') ? localStorage.getItem('summary') : []

const initialState = {
    summaryLocal: summaryFromLocalStorage
}


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
    )
);
export default store