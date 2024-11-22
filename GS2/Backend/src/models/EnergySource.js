const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EnergySource = sequelize.define('EnergySource', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false }, // Ex: 'Solar', 'Wind'
    availability: { type: DataTypes.BOOLEAN, allowNull: false }, // Disponibilidade no momento
});

module.exports = EnergySource;
