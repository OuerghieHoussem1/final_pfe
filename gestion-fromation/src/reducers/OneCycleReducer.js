const oneCycleReducer = (state = null, action) => {
    switch(action.type){
        case "LOAD_ONE_CYCLE":
            return action.payload
        default:
            return state
    }
}

export default oneCycleReducer