const db = require("../models");
const Workshop = db.Formations;
const User = db.Users;
const Attendance = db.Attendance;
// Get all workshops
exports.getAllWorkshops = async (req, res) => {
    try {
      const workshops = await Workshop.findAll({
        include: [{ model: User, as: 'creator' }, { model: User, through: Attendance }],
      });
      res.status(200).json(workshops);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
};
  
// Get a single workshop by ID
exports.getWorkshopById = async (req, res) => {
    const { id } = req.params;
    try {
      const workshop = await Workshop.findByPk(id, {
        include: [{ model: User, as: 'creator' }, { model: User, through: Attendance }],
      });
      if (!workshop) {
        return res.status(404).json({ message: 'Workshop not found' });
    }
    res.status(200).json(workshop);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Create a new workshop
exports.createWorkshop = async (req, res) => {
    const { name, date, creatorId } = req.body;
    try {
        const workshop = await Workshop.create({ name, date, creatorId });
        res.status(201).json(workshop);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an existing workshop by ID
exports.updateWorkshopById = async (req, res) => {
    const { id } = req.params;
    const { name, date, creatorId } = req.body;
    try {
        const workshop = await Workshop.findByPk(id);
        if (!workshop) {
        return res.status(404).json({ message: 'Workshop not found' });
    }
        workshop.name = name;
        workshop.date = date;
        workshop.creatorId = creatorId;
        await workshop.save();
        res.status(200).json(workshop);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
        
// Delete a workshop by ID
exports.deleteWorkshopById = async (req, res) => {
    const { id } = req.params;
    try {
        const workshop = await Workshop.findByPk(id);
        if (!workshop) {
        return res.status(404).json({ message: 'Workshop not found' });
    }
    await workshop.destroy();
    res.status(204).json();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};