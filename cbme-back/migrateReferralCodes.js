// resetDatabase.js
require('dotenv').config();
const { sequelize } = require('./config/database');

const resetDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão estabelecida');

    // Desativa chaves estrangeiras temporariamente
    await sequelize.query('DROP TABLE IF EXISTS "Users" CASCADE');
    
    console.log('✅ Tabela Users removida com todas as dependências');

  } catch (error) {
    console.error('❌ Erro ao resetar banco:', error);
  } finally {
    await sequelize.close();
    process.exit();
  }
};

resetDB();