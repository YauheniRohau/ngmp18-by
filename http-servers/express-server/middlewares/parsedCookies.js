const parsedCookies = () => (req, res, next) => {
  req.parsedCookies = req.headers.cookie;
  next();
};

export default parsedCookies;
