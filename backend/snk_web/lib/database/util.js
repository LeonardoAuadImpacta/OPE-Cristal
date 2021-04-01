const sanitizeQuery = (filters) => {
  return Object.entries(filters).reduce((acc, [key, value]) => {
    if (value) {
      const parsedValue = JSON.parse(value);
      return Object.assign(acc, { [key]: parsedValue });
    } else {
      return acc;
    }
  }, {});
};

module.exports = { sanitizeQuery };
