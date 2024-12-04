const { jwt, access_token } = require("../../config/config")

const jwtToken= (payload, time)=>{
    const token = jwt.sign({...payload}, access_token, {expiresIn: time});
    return token;
}

module.exports= {jwtToken};