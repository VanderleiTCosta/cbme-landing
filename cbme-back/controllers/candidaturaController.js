const Candidatura = require('../models/Candidatura');
const fs = require('fs');
const path = require('path');

// Criar nova candidatura
const createCandidatura = async (req, res) => {
  try {
    const { nome, email, telefone, areaInteresse, vagaInteresse, linkedin, mensagem } = req.body;
    const curriculo = req.file;

    if (!curriculo) {
      return res.status(400).json({ 
        success: false,
        error: 'Currículo é obrigatório' 
      });
    }

    const finalPath = path.join('uploads', path.basename(curriculo.path));
    fs.renameSync(curriculo.path, finalPath);

    const candidatura = await Candidatura.create({
      nome,
      email,
      telefone,
      areaInteresse,
      vagaInteresse: vagaInteresse || null,
      linkedin: linkedin || null,
      mensagem: mensagem || null,
      curriculoPath: finalPath,
      status: 'pendente'
    });

    return res.status(201).json({
      success: true,
      data: candidatura
    });

  } catch (error) {
    console.error('Erro ao criar candidatura:', error);
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(500).json({
      success: false,
      error: 'Erro ao processar candidatura'
    });
  }
};

// Listar candidaturas (admin)
const getCandidaturas = async (req, res) => {
  try {
    const { status } = req.query;
    const where = {};
    
    if (status) {
      where.status = status;
    }

    const candidaturas = await Candidatura.findAll({
      where,
      order: [['createdAt', 'DESC']]
    });

    return res.json({
      success: true,
      data: candidaturas
    });
  } catch (error) {
    console.error('Erro ao buscar candidaturas:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao buscar candidaturas'
    });
  }
};

// Atualizar status (admin)
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const candidatura = await Candidatura.findByPk(id);
    if (!candidatura) {
      return res.status(404).json({
        success: false,
        error: 'Candidatura não encontrada'
      });
    }

    candidatura.status = status;
    await candidatura.save();

    return res.json({
      success: true,
      data: candidatura
    });
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao atualizar status'
    });
  }
};

// Download do currículo
const downloadCurriculo = async (req, res) => {
  try {
    const { id } = req.params;
    const candidatura = await Candidatura.findByPk(id);
    
    if (!candidatura) {
      return res.status(404).json({
        success: false,
        error: 'Candidatura não encontrada'
      });
    }

    const filePath = path.join(__dirname, '..', candidatura.curriculoPath);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: 'Arquivo não encontrado'
      });
    }

    return res.download(filePath);
  } catch (error) {
    console.error('Erro ao baixar currículo:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao baixar currículo'
    });
  }
};

module.exports = {
  createCandidatura,
  getCandidaturas,
  updateStatus,
  downloadCurriculo
};