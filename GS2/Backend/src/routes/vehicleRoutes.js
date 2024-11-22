const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, vehicleController.getAllVehicles);
router.post('/', authMiddleware, vehicleController.addVehicle);
router.put('/:id', authMiddleware, vehicleController.updateVehicle);

module.exports = router;
