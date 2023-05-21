const db = require("../models");
const User = db.Users;
const Attendance = db.Attendance;
const Workshop = db.Formations;
const PreInscription = db.PreInscription

// Create a new attendance record
exports.createPreInscription = async (req, res) => {
    const { userId, cycleId } = req.body;
    try {
        const preInscription = await PreInscription.create({ UserId:userId, cycleId,preInscription_date:new Date()});
        res.status(201).json(preInscription);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};