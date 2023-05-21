import axios  from "axios"
const BASE_URL = "http://localhost:5000/api"


//AUTH
export const signup = (newUser) => axios.post(`${BASE_URL}/auth/signup`,newUser)
export const login = (userData) => axios.post(`${BASE_URL}/auth/login`,userData)


//cycles
export const createCycles = (newCycle) => axios.post(`${BASE_URL}/cycle/`,newCycle)
export const getCycles = (body) => axios.get(`${BASE_URL}/cycle?wantPre=${body.wantPre}`)
export const getCyclesById = (cycleId,body) => axios.get(`${BASE_URL}/cycle/${cycleId}?wantPre=${body.wantPre}`)
export const createPreInscription = (newPreinscription) => axios.post(`${BASE_URL}/cycle/preinscription`,newPreinscription)
export const createInscription = (newInscription) => axios.post(`${BASE_URL}/cycle/inscription`,newInscription)

//cycles
export const createFormation = (newFormation) => axios.post(`${BASE_URL}/formations/`,newFormation)
export const getFormations = () => axios.get(`${BASE_URL}/formations/`)
export const getFormationsByCycleId = (cycleId) => axios.get(`${BASE_URL}/formations/cycle/${cycleId}`)
export const getFormationsById = (id) => axios.get(`${BASE_URL}/formations/${id}`)

//Attendance
export const createAttendance = (newAttendance) => axios.post(`${BASE_URL}/attendance/`,newAttendance)
export const getAttendances = () => axios.get(`${BASE_URL}/attendance/`)
export const getAttendanceById = (attendanceId) => axios.get(`${BASE_URL}/attendance/${attendanceId}`)

