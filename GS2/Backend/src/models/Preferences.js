const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Preferences = sequelize.define('Preferences', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    renewableOnly: { type: DataTypes.BOOLEAN, defaultValue: false }, // Priorizar fontes renováveis
    lowDemandHours: { type: DataTypes.STRING, allowNull: true }, // Horários de menor demanda, ex.: "22:00-06:00"
    userId: { type: DataTypes.INTEGER, allowNull: false },
});

// Relacionamento
Preferences.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Preferences;
