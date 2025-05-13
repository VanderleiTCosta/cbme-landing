const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Candidatura = sequelize.define('Candidatura', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  areaInteresse: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  vagaInteresse: {
    type: DataTypes.STRING
  },
  linkedin: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  },
  curriculoPath: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  mensagem: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM('pendente', 'visualizada', 'contratado', 'rejeitada'),
    defaultValue: 'pendente'
  }
}, {
  tableName: 'Candidaturas',
  timestamps: true,
  paranoid: true // Para soft delete
});

module.exports = Candidatura;