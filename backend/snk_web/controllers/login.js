module.exports = (req, res, next) => {
  const token = "a-token";
  res.json({ token: token });
};
