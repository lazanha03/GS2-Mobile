const Vehicle = require('../models/Vehicle');

exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addVehicle = async (req, res) => {
    const { model, status, batteryLevel } = req.body;
    try {
        const newVehicle = await Vehicle.create({ model, status, batteryLevel });
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
