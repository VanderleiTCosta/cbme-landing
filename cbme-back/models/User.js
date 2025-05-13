const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  referralCode: {
    type: DataTypes.INTEGER, // Tipo corrigido
    unique: true
  },
  referredBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'referralCode' // Agora referencia o código numérico
    }
  },
  
  ip: {
    type: DataTypes.STRING
  },
  userAgent: {
    type: DataTypes.TEXT
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Users',
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if (!user.referralCode) {
        let code;
        let isUnique = false;
        let attempts = 0;
        const maxAttempts = 100;

        // Garante que o código seja único
        while (!isUnique && attempts < maxAttempts) {
          code = Math.floor(100000 + Math.random() * 900000); // Número de 6 dígitos
          const existingUser = await User.findOne({ where: { referralCode: code } });
          if (!existingUser) {
            isUnique = true;
          }
          attempts++;
        }

        if (!isUnique) {
          throw new Error('Não foi possível gerar um código de indicação único');
        }

        user.referralCode = code;
      }
    }
  }
});

// Relacionamentos de autorreferência
User.hasMany(User, { as: 'Referrals', foreignKey: 'referredBy' });
User.belongsTo(User, { as: 'Referrer', foreignKey: 'referredBy' });

module.exports = User;