import jwt from "jsonwebtoken";
import config from "../config/config.json";

const jwtVerify = () => (req, res, next) => {
  // const { token } = req.headers;
  const { token } = req.parsedCookies;

  const notFoundTokenObj = {
    code: 404,
    message: "Not found",
    data: "Access token not valid"
  };

  return jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
    if (err) return res.send(notFoundTokenObj);

    const { email, password } = decoded;
    const { email: hardcodedEmail, password: hardcodedPassword } = config.credentials;
    const isCredsNotMatch = (email !== hardcodedEmail) || (password !== hardcodedPassword);

    if (isCredsNotMatch) return res.send(notFoundTokenObj);

    return next();
  })
};

export default jwtVerify;
