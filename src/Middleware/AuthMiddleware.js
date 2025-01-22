import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.redirect('/')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.id = decoded['id'];
  } catch (error) {
    console.log(error);
    return res.redirect('/');
  }

  next();
}

export default authMiddleware;