import { createAttendance, getAttendanceById, getAttendances } from "../api"

export const createAttendanceController = (newAttendance) => async (dispatch) => {
    try {
        const {data} = await createAttendance(newAttendance)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAttendancesController = () => async (dispatch) => {
    try {
        const {data} = getAttendances()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAttendanceByIdController = (AttendanceId) => async (dispatch) => {
    try {
        const {data} = getAttendanceById(AttendanceId)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}