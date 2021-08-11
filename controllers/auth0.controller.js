const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const JWKSURI = process.env.JWKSURI;

const client = jwksClient({
  jwksUri: JWKSURI,
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

const verifyToken = async (request, response) => {
  const token = request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (error, user) => {
    if (error) {
      response.send('invalid token');
    }
    response.json(user);
  });
};

module.exports = { getKey, verifyToken };
