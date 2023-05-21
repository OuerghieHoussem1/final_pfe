const db = require("../models");
const User = db.Users;
const Attendance = db.Attendance;
const Workshop = db.Formations;
const Inscription = db.Inscription
const preInscription = db.PreInscription

// Create a new attendance record
exports.createInscription = async (req, res) => {
    const { userId, cycleId } = req.body;
    try {
        const inscription = await Inscription.create({ UserId:userId, cycleId,Inscription_date:new Date()});
        const preI = await preInscription.findOne({where:{UserId:userId, cycleId:cycleId}})
        if (preI) {
            await preI.destroy();
        }
        res.status(201).json(inscription);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};