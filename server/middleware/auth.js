import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // jwt.verify used to verify the token and decode its payload
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}

export default auth;