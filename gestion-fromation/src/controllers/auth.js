import { login, signup } from "../api"

export const signupController = (newUser) => async (dispatch) => {
    try {
        const {data} = await signup(newUser)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const loginController = (userData, navigate) => async (dispatch) => {
    try {
        const {data} = await login(userData)
        if(!data) {
            alert("Please try later")
            return 
        }
        localStorage.setItem("profile",JSON.stringify(data))
        navigate("/dashboard")
    } catch (error) {
        console.log(error)
    }
}

export const logout = (navigate) => async (dispatch) => {
    try {
        console.log("LOGGING OUT")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
