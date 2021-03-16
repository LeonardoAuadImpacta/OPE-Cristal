module.exports = (req, res, next) => {
  const token = "snk-token";
  res.json({
    token: token,
    username: "Kito",
    profile: "CUSTOMER"
  });
};