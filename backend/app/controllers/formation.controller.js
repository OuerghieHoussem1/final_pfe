const db = require("../models");
const CycleWorkshop = db.Cycle_formations;
const User = db.Users;
const formation = db.formation
const Attendance = db.Attendance;




exports.createFormation = async (req, res) => {
    const { name, date, partOfId } = req.body;
    try {
        const formationC = await formation.create({ name, date, partOfId });
        res.status(201).json(formationC);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get all workshops
exports.getAllFormations = async (req, res) => {
    try {
      const formations = await formation.findAll({
        include: [ { model: CycleWorkshop, as: "partOf" }],
      });
      res.status(200).json(formations);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllFormationsByCycle = async (req, res) => {
    try {
        console.log(req.params.cycleId)
      const formations = await formation.findAll({where:{partOfId:req.params.cycleId}},{
        include: [ { model: CycleWorkshop, as: "partOf" }],
      });
      res.status(200).json(formations);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getFormationById = async (req, res) => {
  try {
    const oneFormation = await formation.findByPk(req.params.id,{
      include: [ { model: CycleWorkshop, as: "partOf" }],
    });
    res.status(200).json(oneFormation);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
}