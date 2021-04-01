module.exports = (req, res, next) => {
  const token = "snk-token";
  res.json({
    id: 1,
    token: token,
    username: "Kito",
    profile: "CUSTOMER",
    // profile: "ADMIN "
  });
};
