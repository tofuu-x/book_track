import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.redirect('/')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.id = decoded['id'];
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Session expired. Please log in again." });
    }
  }

  
}

export default authMiddleware;