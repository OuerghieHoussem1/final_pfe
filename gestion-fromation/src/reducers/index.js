import { combineReducers } from "redux";
import connectedUserReducer from "./connectedUserReducer";
import workshopsReducer from "./workshopsReducer"
import oneCycleReducer from "./OneCycleReducer";
import formationsReducer from "./formationsReducer";
import oneFormationReducer from "./OneFormationReducer";
import usersReducer from "./usersReducer"
const reducers = combineReducers({  
    connectedUserReducer,
    workshopsReducer,
    oneCycleReducer,
    formationsReducer,
    oneFormationReducer,
    usersReducer
})


export default reducers