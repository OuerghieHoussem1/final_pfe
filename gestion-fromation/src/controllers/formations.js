import { createFormation, getFormations, getFormationsByCycleId, getFormationsById } from "../api"

export const createFormationController = (newFormation) => async (dispatch) => {
    try {
        const {data} = await createFormation(newFormation)
        dispatch({type:"CREATE_FORMATIONS",payload:data})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getFormationsController = () => async (dispatch) => {
    try {
        const {data} = await getFormations()
        dispatch({type:"LOAD_FORMATIONS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getFormationsByCycleIdController = (cycleId) => async (dispatch) => {
    try {
        const {data} = await getFormationsByCycleId(cycleId)
        dispatch({type:"LOAD_FORMATIONS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getFormationsByIdController = (id) => async (dispatch) => {
    try {
        const {data} = await getFormationsById(id)
        dispatch({type:"LOAD_ONE_FORMATION", payload:data})
    } catch (error) {
        console.log(error)
    }
}