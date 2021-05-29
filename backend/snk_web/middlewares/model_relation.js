const checkRelation = (callback) => {
  return async (req, res, next) => {
    if (!callback(req)) return res.status(403).json({error: "Não autorizado", details: [{params: req.params}]});
    next();
  }
}

module.exports = checkRelation;
