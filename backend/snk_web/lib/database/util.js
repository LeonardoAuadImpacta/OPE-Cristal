const sanitizeQuery = (fields, filters) => {
  return Object.entries(filters).reduce((acc, [key, value]) => {
    if (fields.includes(key) && value !== null && value !== undefined) {
      return Object.assign(acc, { [key]: value });
    } else {
      return acc;
    }
  }, {});
};

module.exports = { sanitizeQuery };
