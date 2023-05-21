import axios  from "axios"
const BASE_URL = "http://localhost:5000/api"


//AUTH
export const signup = (newUser) => axios.post(`${BASE_URL}/auth/signup`,newUser)
export const login = (userData) => axios.post(`${BASE_URL}/auth/login`,userData)


//Formations
export const createFormation = (newFormation) => axios.post(`${BASE_URL}/formation/`,newFormation)
export const getFormations = () => axios.get(`${BASE_URL}/formation/`)
export const getFormationById = (formationId) => axios.get(`${BASE_URL}/formation/${formationId}`)

//Attendance
export const createAttendance = (newAttendance) => axios.post(`${BASE_URL}/formation/`,newAttendance)
export const getAttendances = () => axios.get(`${BASE_URL}/formation/`)
export const getAttendanceById = (attendanceId) => axios.get(`${BASE_URL}/formation/${attendanceId}`)

