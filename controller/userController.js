import routes from "../routes";
//import alert from 'alert-node'
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    //alert("비밀번호가 맞지 않습니다! 다시 입력해주세요.");
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }
    // To Do: Log user in
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("EditProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
