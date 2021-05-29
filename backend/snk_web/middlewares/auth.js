const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const parts = req.headers.authorization && req.headers.authorization.split(' ') || [];
  if (parts.length !== 2) return res.status(401).json({error: "Token inválido", details: []});

  const scheme = parts[0];
  const token = /Bearer$/i.test(scheme) ? parts[1] : null;
  if (!token) return res.status(401).json({error: "Token inválido", details: []});

  jwt.verify(token, process.env.AUTH_SECRET || "a-secret", (err, decoded) => {
    if (err) return res.status(401).json({error: "Token inválido", details: []});

    req.claims = decoded.claims;
    next();
  });
};

const COERCE_REGEXP = /<(.*?)>/gi

const authorized = (claim) => { 
  return async (req, res, next) => {
    var expectedClaim;
    const match = Array.from(claim.matchAll(COERCE_REGEXP))
    if (match.length > 0) {
      const [[_, matched]] = match;
      const value = matched && req.params[matched] ? req.params[matched] : "";
      expectedClaim = claim.replace(COERCE_REGEXP, value);
    } else {
      expectedClaim = claim;
    }

    return req.claims && req.claims.includes(expectedClaim) ?
      next() : res.status(403).json({error: "Não autorizado", details: []});
  }
}

module.exports = { verifyJWT, authorized };
