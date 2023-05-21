import { createFormation, getFormationById, getFormations } from "../api"

export const createFormationController = (newFormation) => async (dispatch) => {
    try {
        const {data} = createFormation(newFormation)
        
    } catch (error) {
        console.log(error)
    }
}

export const getFormationsController = () => async (dispatch) => {
    try {
        const {data} = await getFormations()
        dispatch({type:"LOAD_WOKSHOPS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getFormationByIdController = (formationId) => async (dispatch) => {
    try {
        const {data} = getFormationById(formationId)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}