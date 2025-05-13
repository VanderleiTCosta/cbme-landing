const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Adicionando a importação do módulo fs
const {
  createCandidatura,
  getCandidaturas,
  updateStatus,
  downloadCurriculo
} = require('../controllers/candidaturaController');

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === process.env.ADMIN_TOKEN) return next();
  res.status(403).json({ error: 'Acesso não autorizado' });
};

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../temp_uploads');
    
    // Criar diretório se não existir
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'curriculo-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Apenas arquivos PDF ou DOC são permitidos'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Middleware para limpar arquivos temporários
const cleanupTempFiles = (req, res, next) => {
  res.on('finish', () => {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  });
  next();
};

// Rotas
router.post('/candidaturas', upload.single('curriculo'), cleanupTempFiles, createCandidatura);
router.get('/admin/candidaturas', authenticateAdmin, getCandidaturas);
router.put('/admin/candidaturas/:id/status', authenticateAdmin, updateStatus);
router.get('/admin/candidaturas/:id/curriculo', authenticateAdmin, downloadCurriculo);

module.exports = router;