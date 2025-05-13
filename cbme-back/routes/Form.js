const express = require('express');
const router = express.Router();
const { 
  createUser, 
  validateReferral,
  getReferralStats
} = require('../controllers/userController');

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === process.env.ADMIN_TOKEN) return next();
  res.status(403).json({ error: 'Acesso não autorizado' });
};

// Rotas públicas
router.post('/users', createUser);
router.get('/users/validate/:code', validateReferral);

// Rotas protegidas
router.get('/admin/referral-stats', authenticateAdmin, getReferralStats);

module.exports = router;