import { createCycles, getCyclesById, getCycles, createPreInscription, createInscription } from "../api"

export const createCyclesController = (newCycles) => async (dispatch) => {
    try {
        const {data} = await createCycles(newCycles)
        dispatch({type:"CREATE_WORKSHOP",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createPreinscriptionController = (newPreinscription) => async (dispatch) => {
    try {
        const {data} = await createPreInscription(newPreinscription)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const createInscriptionController = (newInscription) => async (dispatch) => {
    try {
        const {data} = await createInscription(newInscription)
        console.log(data)
        dispatch({type:"CREATE_WOKSHOP", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getCyclesController = (body) => async (dispatch) => {
    try {
        const {data} = await getCycles(body)
        dispatch({type:"LOAD_WOKSHOPS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getCyclesByIdController = (cyclesId,body) => async (dispatch) => {
    try {
        console.log("aa")
        const {data} = await getCyclesById(cyclesId,body)
        console.log(data)
        dispatch({type:"LOAD_ONE_CYCLE",payload:data})
    } catch (error) {
        console.log(error)
    }
}