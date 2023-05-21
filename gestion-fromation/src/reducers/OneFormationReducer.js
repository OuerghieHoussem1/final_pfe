const oneFormationReducer = (state = null, action) => {
    switch(action.type){
        case "LOAD_ONE_FORMATION":
            return action.payload
        default:
            return state
    }
}

export default oneFormationReducer