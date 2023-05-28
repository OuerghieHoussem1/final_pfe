const usersReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_USERS":
            console.log(action)
            return action.payload
        case "CREATE_USER":
            return [...state,action.payload]
        default:
            return state
    }
}

export default usersReducer