const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Não autorizado' });
    }
  
    const token = authHeader.split(' ')[1];
    
    if (token === process.env.ADMIN_TOKEN) {
      return next();
    }
  
    res.status(403).json({ error: 'Acesso negado' });
  };
  
  module.exports = authenticateAdmin;