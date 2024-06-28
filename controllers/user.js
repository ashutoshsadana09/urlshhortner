const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setuser } = require("../service/auth");

async function Signup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name: "ashutosh sadana",
    email: "ashutoshsadana10@gmail.com",
    password: "123456",
  });
  return res.redirect("/");
}

async function Login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });


  const token =setuser( user);
  res.cookie("uid",token);
  return res.redirect("/");
}

module.exports = {
  Signup,
 Login,
};