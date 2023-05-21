const db = require("../models");
const CycleWorkshop = db.Cycle_formations;
const User = db.Users;
const Attendance = db.Attendance;
const PreInscription = db.PreInscription
const Inscription = db.Inscription
// Get all workshops
exports.getAllCycles = async (req, res) => {
    try {
        const {wantPre} = req.query
        let cycles
        if(wantPre==="true"){
            cycles = await db.Cycle_formations.findAll({
                include: [{ model: User, as: 'creator' }, { model: User, through: { model: PreInscription, as: 'preInscriptions' }}],
            })
        }else{
            cycles = await db.Cycle_formations.findAll({
                include: [{ model: User, as: 'creator' }, { model: User, through: { model: Inscription, as: 'inscriptions' }}],
            })
        }
      res.status(200).json(cycles);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
};
  
// Get a single workshop by ID
exports.getCycleById = async (req, res) => {
    const { id } = req.params;
    try {
        const {wantPre} = req.query
        let cycle
        if(wantPre==="true"){
            cycle = await db.Cycle_formations.findByPk(id, {
                include: [{ model: User, as: 'creator' }, { model: User, through: { model: PreInscription, as: 'preInscriptions' }}],
            })
        }else{
            cycle = await db.Cycle_formations.findByPk(id, {
                include: [{ model: User, as: 'creator' }, { model: User, through: { model: Inscription, as: 'inscriptions' }}],
            })
        }
      if (!cycle) {
        return res.status(404).json({ message: 'Cycle not found' });
        }
        res.status(200).json(cycle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Create a new workshop
exports.createCycle = async (req, res) => {
    const { name, date, creatorId } = req.body;
    try {
        const cycle = await CycleWorkshop.create({ name, date, creatorId });
        res.status(201).json(cycle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an existing workshop by ID
exports.updateCycleById = async (req, res) => {
    const { id } = req.params;
    const { name, date, creatorId } = req.body;
    try {
        const cycle = await CycleWorkshop.findByPk(id);
        if (!cycle) {
        return res.status(404).json({ message: 'Workshop not found' });
    }
        cycle.name = name;
        cycle.date = date;
        cycle.creatorId = creatorId;
        await cycle.save();
        res.status(200).json(cycle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Delete a workshop by ID
exports.deleteCycleById = async (req, res) => {
    const { id } = req.params;
    try {
        const cycle = await CycleWorkshop.findByPk(id);
        if (!cycle) {
        return res.status(404).json({ message: 'Workshop not found' });
    }
    await cycle.destroy();
    res.status(204).json();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};