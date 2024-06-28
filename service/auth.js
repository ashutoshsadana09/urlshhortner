const jwt =require("jsonwebtoken");
const secret ="ashutosh@#$";
function setuser(user) {
  return jwt.sign({
      _id:user._id,email:user.email
    }, secret);
}


function getuser(token) {
  if(!token) return null;
  let user = null;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error(err);
    } else {
      user = decoded;
    }
  });
  return user;
}

module.exports = {
  setuser,
  getuser,
};