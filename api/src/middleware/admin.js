// I would call this middleware after auth middleware, that has already
// set a user property to the request object
module.exports = function (req, res, next) {
  if (!req.body.isAdmin) return res.status(403).send('Access denied');

  next();
};

// 401 Unauthorized -> hasn't send a valid token, may be authorized
// 403 Forbidden -> has sent a valid token, and it doesn't have permission
