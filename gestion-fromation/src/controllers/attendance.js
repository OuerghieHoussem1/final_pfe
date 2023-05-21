import { createAttendance, getAttendanceById, getAttendances } from "../api"

export const createAttendanceController = (newAttendance) => (dispatch) => {
    try {
        const {data} = createAttendance(newAttendance)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAttendancesController = () => (dispatch) => {
    try {
        const {data} = getAttendances()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getAttendanceByIdController = (AttendanceId) => (dispatch) => {
    try {
        const {data} = getAttendanceById(AttendanceId)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}