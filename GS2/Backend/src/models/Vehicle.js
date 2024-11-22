const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    model: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }, // Ex: 'Charging', 'Idle'
    batteryLevel: { type: DataTypes.FLOAT, allowNull: false }, // Percentual de carga
});

module.exports = Vehicle;
