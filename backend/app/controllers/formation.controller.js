const db = require("../models");
const CycleWorkshop = db.Cycle_formations;
const User = db.Users;
const formation = db.formation
const Attendance = db.Attendance;
const Inscription = db.Inscription




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

exports.getNonPresentList = async (req, res) => {
  try {
    console.log(req.params)
    const oneCycle = await CycleWorkshop.findByPk(req.params.cycleId,{include: [{ model: User, as: 'creator' }, { model: User, through: { model: Inscription, as: 'inscriptions' }}]})
    const attendance = await Attendance.findAll({where:{formationId:req.params.formationId}})


    const newUsers =  oneCycle.Users.filter(user => {
      console.log(user)
      const isUserInAttendance = attendance.some(item => item.UserId === user.id);
      console.log(isUserInAttendance)
      return isUserInAttendance;
    });
    
    console.log("aaaaa")

    res.status(200).json({newUsers,attendance});
  } catch (error) {
    console.error('Error loading users:', error);
    throw error;
  }
}