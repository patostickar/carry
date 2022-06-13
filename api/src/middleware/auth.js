const jwt = require('jsonwebtoken');
const { JWT } = process.env;

module.exports = function (req, res, next) {
  const authorization = req.get('authorization');

  let token = null;

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  try {
    const decoded = jwt.verify(token, JWT);
    console.log(1);
    if (!token || !decoded.id)
      return res.status(401).send('Access denied. Token missing or invalid');
    console.log(2);
    if (decoded.isBanned)
      return res
        .status(401)
        .send('Access denied. You are banned from using Carry');
    console.log(3);

    res.locals.isAdmin = decoded.isAdmin;
    res.locals.id = decoded.id;
    res.locals.isPremium = decoded.isPremium;
    console.log(4);

    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};
