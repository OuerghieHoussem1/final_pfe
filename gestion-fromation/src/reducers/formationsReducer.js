const formationsReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_FORMATIONS":
            console.log(action)
            return action.payload
        case "CREATE_FORMATIONS":
            return [...state,action.payload]
        default:
            return state
    }
}

export default formationsReducer