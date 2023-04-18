const verifyAuthToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Authorization failed" });
  }
  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: "Invalid token",
        }); 
      } else {
        req.authId = decodedToken?.id
        next();
      }
    });
  } catch (err
nrv-qkif-xqx