const jwt = require('jsonwebtoken');
const jwtMiddleware = async (req, res, next) => {
    const token= req.headers.authorization.split(" ")[1];
    if(!token)
        return res.status(401).json({message: "Unauthorized !"});
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user= user;
        next();
    } catch(err) {
        return res.status(401).json({message: "Unauthorized !"});
    }
}

module.exports= jwtMiddleware;