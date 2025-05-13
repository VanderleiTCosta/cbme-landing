require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./config/database');
const CandidaturaRouter = require('./routes/candidaturaRoutes');
const FormRouter = require('./routes/Form'); // Adicione esta linha

const app = express();

// Criar pastas necessárias
const uploadsDir = path.join(__dirname, 'Uploads');
const tempDir = path.join(__dirname, 'temp_uploads');
[uploadsDir, tempDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar modelos
require('./models/Candidatura');
require('./models/User'); // Garanta que o modelo User seja carregado

// Testar conexão com o banco
sequelize.authenticate()
  .then(() => console.log('✅ Conexão com PostgreSQL estabelecida!'))
  .catch(err => console.error('❌ Falha na conexão:', err));

// Sincronizar modelos
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Modelos sincronizados com o banco!'))
  .catch(err => console.error('❌ Erro ao sincronizar modelos:', err));

// Rotas
app.get('/', (req, res) => res.json({ status: 'API Running' }));
app.use('/api', CandidaturaRouter);
app.use('/api', FormRouter); // Adicione esta linha para incluir as rotas de Form.js
app.use('/uploads', express.static(uploadsDir));

// Error handling
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  if (req.file && fs.existsSync(req.file.path)) {
    fs.unlinkSync(req.file.path);
  }
  res.status(500).json({ 
    error: 'Erro interno no servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));