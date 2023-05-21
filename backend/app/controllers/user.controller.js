const db = require("../models");
const User = db.Users;
const Workshop = db.Formations
// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
};
  
// Get a single user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
        include: [Workshop],
        });
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email, password } });
        if (!user) {
            throw new Error('User not found');
        }
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Update an existing user by ID
exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        user.name = name;
        user.email = email;
        user.password = password;
        user.role = role;
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.status(204).json();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};