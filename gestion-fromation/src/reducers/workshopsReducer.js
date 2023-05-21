const workshopsReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_WOKSHOPS":
            console.log(action)
            return action.payload
        case "CREATE_WORKSHOP":
            return [...state,action.payload]
        default:
            return state
    }
}

export default workshopsReducer