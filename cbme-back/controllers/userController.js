const { Op, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/User');

// Criar novo usuário
const createUser = async (req, res) => {
  const { fullName, email, phone, referralCode } = req.body;
  
  if (!fullName || !email || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Nome completo, e-mail e telefone são obrigatórios'
    });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'E-mail já cadastrado'
      });
    }

    // Se houver código de indicação, verifica se existe
    if (referralCode) {
      const referringUser = await User.findOne({
        where: { referralCode }
      });
    
      if (!referringUser) {
        return res.status(400).json({
          success: false,
          error: 'Código de referência inválido'
        });
      }
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      referredBy: referralCode || null,
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });

    return res.status(201).json({
      success: true,
      data: {
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        referralCode: newUser.referralCode,
        message: 'Usuário criado com sucesso!'
      }
    });

  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => ({
        field: err.path,
        message: err.message
      }));
      
      return res.status(400).json({
        success: false,
        error: 'Erro de validação',
        details: errors
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message || 'Erro interno no servidor'
    });
  }
};

// Validar código de referência
const validateReferral = async (req, res) => {
  const { code } = req.params;

  try {
    const isValid = await User.findOne({
      where: { referralCode: code },
      attributes: ['id', 'fullName', 'email']
    });

    if (!isValid) {
      return res.status(404).json({
        success: false,
        error: 'Código de referência inválido'
      });
    }

    // Buscar estatísticas de uso deste código
    const usageCount = await User.count({
      where: { referredBy: code }
    });

    return res.json({
      success: true,
      data: {
        isValid: true,
        referrer: isValid.fullName,
        usageCount
      }
    });

  } catch (error) {
    console.error('Erro ao validar referência:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro interno no servidor'
    });
  }
};

// Obter estatísticas de indicações
const getReferralStats = async (req, res) => {
  try {
    const stats = await sequelize.query(`
      SELECT 
        u."referralCode" as "referralCode",
        COUNT(r.id) as "usageCount",
        u."fullName" as "ownerName",
        u.email as "ownerEmail"
      FROM "Users" u
      LEFT JOIN "Users" r ON r."referredBy" = u."referralCode"
      WHERE u."referralCode" IS NOT NULL
      GROUP BY u.id
      ORDER BY "usageCount" DESC
    `, {
      type: sequelize.QueryTypes.SELECT
    });

    res.json({
      success: true,
      data: stats.map(stat => ({
        referralCode: stat.referralCode,
        usageCount: parseInt(stat.usageCount),
        owner: {
          name: stat.ownerName,
          email: stat.ownerEmail
        }
      }))
    });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao buscar estatísticas' 
    });
  }
};

module.exports = {
  createUser,
  validateReferral,
  getReferralStats
};