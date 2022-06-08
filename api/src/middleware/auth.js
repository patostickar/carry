const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://carry-login.us.auth0.com/.well-known/jwks.json`,
  }),

  audience: 'https://carry-login.us.auth0.com/api/v2/',
  issuer: 'https://carry-login.us.auth0.com/',
  algorithms: 'RS256',
});

let options = { customScopeKey: 'permissions' }; // This is necessary to support the direct-user permissions

const checkScopes = jwtAuthz(['read:protected']);
