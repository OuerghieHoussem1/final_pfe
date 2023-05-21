const db = require("../models");
const User = db.Users;
const Attendance = db.Attendance;
const Workshop = db.Formations;

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findAll({
        include: [{ model: User }, { model: Workshop }],
        });
        res.status(200).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
    
// Get a single attendance record by ID
exports.getAttendanceById = async (req, res) => {
    const { id } = req.params;
    try {
        const attendance = await Attendance.findByPk(id, {
        include: [{ model: User }, { model: Workshop }],
        });
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
    };
        
// Create a new attendance record
exports.createAttendance = async (req, res) => {
    const { userId, workshopId, attendanceDate } = req.body;
    try {
        const attendance = await Attendance.create({ UserId:userId, formationId:workshopId, attendance_date:attendanceDate });
        res.status(201).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
    
// Update an existing attendance record by ID
exports.updateAttendanceById = async (req, res) => {
    const { id } = req.params;
    const { userId, workshopId, attendanceDate } = req.body;
    try {
        const attendance = await Attendance.findByPk(id);
        if(!attendance) {
        return res.status(404).json({ message: 'Attendance record not found' });
    }
        attendance.userId = userId;
        attendance.workshopId = workshopId;
        attendance.attendanceDate = attendanceDate;
        await attendance.save();
        res.status(200).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
    
// Delete an attendance record by ID
exports.deleteAttendanceById = async (req, res) => {
    const { id } = req.params;
    try {
        const attendance = await Attendance.findByPk(id);
        if (!attendance) {
        return res.status(404).json({ message: 'Attendance record not found' });
    }
        await attendance.destroy();
        res.status(204).json();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Get all attendance records for a particular workshop
exports.getAttendanceForWorkshop = async (req, res) => {
    const { id } = req.params;
    try {
        const attendance = await Attendance.findAll({
        where: { workshopId: id },
        include: [{ model: User }, { model: Workshop }],
        });
        res.status(200).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Get all attendance records for a particular user
exports.getAttendanceForUser = async (req, res) => {
    const { id } = req.params;
    try {
        const attendance = await Attendance.findAll({
        where: { userId: id },
        include: [{ model: User }, { model: Workshop }],
        });
        res.status(200).json(attendance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all workshops created by a particular user
exports.getWorkshopsByCreator = async (req, res) => {
    const { id } = req.params;
    try {
        const workshops = await Workshop.findAll({ where: { creatorId: id } });
        res.status(200).json(workshops);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};