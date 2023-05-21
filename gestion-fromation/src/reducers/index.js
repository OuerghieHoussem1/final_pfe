import { combineReducers } from "redux";
import connectedUserReducer from "./connectedUserReducer";
import workshopsReducer from "./workshopsReducer"
const reducers = combineReducers({
    connectedUserReducer,
    workshopsReducer
})


export default reducers