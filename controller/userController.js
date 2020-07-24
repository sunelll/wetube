export const join = (req, res) => res.render("join", { pageTitle: "Join"});
export const login = (req, res) => res.render("login", { pageTitle: "Login"});
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout"});
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("UserDetail", { pageTitle: "UserDetail"});
export const editProfile = (req, res) => res.render("EditProfile", { pageTitle: "EditProfile"});
export const chagePassword = (req, res) => res.render("ChagePassword", { pageTitle: "ChagePassword"});